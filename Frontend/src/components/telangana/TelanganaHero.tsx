import React from 'react';
import { Link } from 'react-router-dom';
import charminarImage from '../../assets/images/charminar.webp';

interface TelanganaHeroProps {
  stateName: string;
}

export const TelanganaHero: React.FC<TelanganaHeroProps> = ({ stateName }) => {

  const stats = [
    { value: '50,000+', label: 'RTIs Filed' },
    { value: '4.8★', label: 'User Rating' },
    { value: '20+', label: 'Districts Covered' },
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 min-h-[60vh] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image - Charminar */}
      <div 
        className="absolute inset-0 z-0 opacity-25 md:opacity-100"
        style={{
          backgroundImage: `url(${charminarImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for readability - darker overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/10" />
      </div>

      {/* Fallback gradient background (if image not found) - behind image */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-primary-50 -z-10" />

      {/* Soft fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="container-responsive max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 max-w-3xl">
            <div>
              <h1 className="text-[1.8rem] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-[1.2] md:leading-tight">
                File RTI Online in {stateName}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-slate-100 mb-6 mt-3 leading-relaxed md:leading-normal">
                Get expert-drafted RTI applications & appeals for {stateName} departments.
              </p>
            </div>

            {/* Two Buttons Inline */}
            <div className="flex flex-col sm:flex-row gap-4 mt-3 md:mt-0">
              <Link
                to="/services/custom-rti"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md md:shadow-lg hover:shadow-xl text-base"
              >
                Start RTI in {stateName}
              </Link>
              <Link
                to="/services/15-minute-consultation"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold rounded-lg transition-all duration-200 shadow-md md:shadow-none text-base"
              >
                Free 15-Min RTI Consult
              </Link>
            </div>

            {/* Three Bullet Points with Icons */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-base">Covers all {stateName} state departments</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-base">Expert legal drafting & appeals</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-base">Online filing & tracking</p>
              </div>
            </div>
          </div>

          {/* Right Side - Info Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-xl shadow-lg border-2 border-primary-200 p-6 sm:p-8 w-[340px] md:w-[360px]">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
                {stateName} RTI Services
              </h3>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                    <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

