import React, { useEffect, useRef, useState } from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Submit RTI Details',
    description: 'Share the information you need from any Telangana government office.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'We Draft Your RTI',
    description: 'Our team prepares a legally sound draft following Telangana RTI rules.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'We File With the Correct PIO',
    description: 'We identify the correct PIO and file your RTI with the right department.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'We Track Replies',
    description: 'We monitor replies and help with appeals if needed.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export const TelanganaProcessTimeline: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-white py-12 md:py-16 lg:py-20"
      style={{
        minHeight: 'fit-content',
        maxHeight: '100vh',
        overflow: 'hidden'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How RTI Works in Telangana
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple 4-step process to get your information
          </p>
        </div>

        {/* Horizontal Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-[60px] left-0 right-0 h-0.5 bg-gray-200" style={{ zIndex: 0 }} />

          {/* Steps Container - 4 Column Grid */}
          <div 
            className="relative grid gap-6 items-stretch"
            style={{
              gridTemplateColumns: 'repeat(4, 1fr)',
            }}
          >
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col items-center h-full"
                style={{
                  animation: isVisible ? `fadeUp 0.6s ease-out ${index * 0.1}s both` : 'none',
                }}
              >
                {/* Card - Equal Height */}
                <div 
                  className="bg-white rounded-[20px] hover:scale-[1.02] transition-all duration-300 w-full h-full border border-gray-100 flex flex-col justify-center items-center relative z-10"
                  style={{
                    minHeight: '280px',
                    padding: '32px 24px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {/* Icon Circle - 60px */}
                  <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#026CB6] text-white mb-6">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Stack - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-white rounded-[20px] shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100"
              style={{
                animation: isVisible ? `fadeUp 0.6s ease-out ${index * 0.1}s both` : 'none',
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon Circle */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#026CB6] text-white flex-shrink-0">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

