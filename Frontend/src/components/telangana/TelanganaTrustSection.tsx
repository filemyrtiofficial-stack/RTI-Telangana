import React from 'react';

interface TrustPoint {
  text: string;
}

const trustPoints: TrustPoint[] = [
  { text: 'Expert team with deep knowledge of Telangana RTI rules' },
  { text: '100% online process - no need to visit offices' },
  { text: 'Real-time tracking of your RTI application' },
  { text: 'Support for first and second appeals' },
  { text: 'Coverage of all Telangana districts' },
  { text: 'Secure and confidential handling of your information' },
];

const stats = [
  { value: '50,000+', label: 'RTIs Filed' },
  { value: '4.8★', label: 'User Rating' },
  { value: '20+', label: 'Districts' },
  { value: '93%', label: 'Success Rate' },
];

export const TelanganaTrustSection: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container-responsive max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Telangana Users Trust Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Trust Points */}
          <div>
            <ul className="space-y-4">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">{point.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Stats Grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center border-2 border-primary-200"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-700">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

