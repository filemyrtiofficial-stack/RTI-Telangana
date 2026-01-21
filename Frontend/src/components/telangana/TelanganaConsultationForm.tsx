import React, { useState } from 'react';
import { AppointmentModal } from '../state/AppointmentModal';

export const TelanganaConsultationForm: React.FC = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    pinCode: '',
    address: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/\D/g, '');
    const length = cleaned.length;
    return length >= 10 && length <= 13;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, acceptTerms: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitMessage('');

    const fullName = formData.fullName?.trim() || '';
    const email = formData.email?.trim() || '';
    const mobile = formData.mobile?.trim() || '';

    const newErrors: Record<string, string> = {};

    if (!fullName) {
      newErrors.fullName = 'Full name is required';
    } else if (fullName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (!email) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else {
      const cleaned = mobile.replace(/\D/g, '');
      const length = cleaned.length;
      if (length < 10) {
        newErrors.mobile = 'Mobile number must be at least 10 digits';
      } else if (length > 13) {
        newErrors.mobile = 'Mobile number must not exceed 13 digits';
      } else if (!validatePhone(mobile)) {
        newErrors.mobile = 'Please enter a valid mobile number (10-13 digits)';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitStatus('submitting');

    try {
      const { consultationsAPI } = await import('../../services/api');

      const result = await consultationsAPI.createPublic({
        full_name: fullName,
        email: email,
        mobile: mobile,
        address: formData.address || null,
        pincode: formData.pinCode || null,
        state_slug: 'telangana',
        source: 'consultation_section',
      });

      if (result && typeof result === 'object' && 'success' in result && result.success) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          pinCode: '',
          address: '',
          acceptTerms: false,
        });
        setSubmitMessage('Thank you! We\'ll connect with you shortly.');
      } else {
        throw new Error('Failed to submit consultation');
      }
    } catch (error: any) {
      setSubmitStatus('error');
      setSubmitMessage(error.message || 'Failed to submit. Please try again.');
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-12 md:py-16 lg:py-20">
      <div className="max-w-full md:max-w-2xl lg:max-w-4xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Need Help with Your RTI in Telangana?
          </h2>
          <p className="text-lg text-gray-700">
            Book a free 15-minute micro consultation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg shadow-gray-200 border-2 border-primary-200 p-6 sm:p-8">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-700 mb-6">{submitMessage}</p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 h-12 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 h-12 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 h-12 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.mobile ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.mobile && <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>}
                </div>

                {/* Pin Code */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Pin Code
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleInputChange}
                    maxLength={6}
                    className="w-full px-4 h-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleCheckboxChange}
                  className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="acceptTerms" className="text-sm text-gray-700">
                  I agree to the{' '}
                  <a href="/terms-and-conditions" className="text-primary-600 hover:underline">
                    Terms and Conditions
                  </a>{' '}
                  and{' '}
                  <a href="/privacy-policy" className="text-primary-600 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="w-full px-6 py-3.5 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
              >
                {submitStatus === 'submitting' ? 'Submitting...' : 'Book Free Consultation'}
              </button>

              {submitStatus === 'error' && submitMessage && (
                <p className="text-sm text-red-600 text-center">{submitMessage}</p>
              )}
            </form>
          )}
        </div>
      </div>

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        stateSlug="telangana"
      />
    </section>
  );
};

