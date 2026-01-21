import React from 'react';
import { Link } from 'react-router-dom';

export const TelanganaVideoSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Mobile: Video First, Then Text */}
        <div className="md:hidden space-y-8">
          {/* Video Card - Mobile */}
          <div className="bg-white rounded-2xl shadow-sm p-4 w-full">
            <div className="relative w-full overflow-hidden rounded-xl aspect-video">
              <iframe
                src="https://www.youtube.com/embed/qKRffCrp71M?start=10&rel=0&modestbranding=1"
                title="Understand RTI for Telangana in 3 Minutes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="text-xs text-slate-500 mt-3 text-center">
              RTI filing explained in simple language for Telangana citizens.
            </p>
          </div>

          {/* Text Content - Mobile */}
          <div className="text-center space-y-6">
            {/* Pill Label */}
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#E5F1FB] text-[#026CB6]">
                For Telangana Residents
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Understand RTI for Telangana in 3 Minutes
            </h2>

            {/* Paragraph */}
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Watch this short explainer to learn how FileMyRTI helps Telangana citizens file RTI applications online — from submitting details to tracking replies.
            </p>

            {/* Bullet Points - Left Aligned */}
            <div className="space-y-3 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">Step-by-step Telangana RTI process</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">Real examples and common questions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">How FileMyRTI handles drafting & filing</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to="/services/custom-rti"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#026CB6] hover:bg-[#025a9e] text-white font-semibold rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Start RTI for Telangana
              </Link>
            </div>

            {/* Secondary Link */}
            <div className="pt-2">
              <Link
                to="/faq"
                className="text-sm text-gray-600 hover:text-primary-600 hover:underline transition-colors"
              >
                Watch later, read the guide instead
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop: 2-Column Layout (Text Left, Video Right) */}
        <div className="hidden md:grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Pill Label */}
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#E5F1FB] text-[#026CB6]">
                For Telangana Residents
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Understand RTI for Telangana in 3 Minutes
            </h2>

            {/* Paragraph */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Watch this short explainer to learn how FileMyRTI helps Telangana citizens file RTI applications online — from submitting details to tracking replies.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">Step-by-step Telangana RTI process</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">Real examples and common questions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">How FileMyRTI handles drafting & filing</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to="/services/custom-rti"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#026CB6] hover:bg-[#025a9e] text-white font-semibold rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Start RTI for Telangana
              </Link>
            </div>

            {/* Secondary Link */}
            <div className="pt-2">
              <Link
                to="/faq"
                className="text-sm text-gray-600 hover:text-primary-600 hover:underline transition-colors"
              >
                Watch later, read the guide instead
              </Link>
            </div>
          </div>

          {/* Right Column - Video Card */}
          <div className="bg-white rounded-2xl shadow-sm p-4 lg:p-6">
            <div className="relative w-full overflow-hidden rounded-xl aspect-video">
              <iframe
                src="https://www.youtube.com/embed/qKRffCrp71M?start=10&rel=0&modestbranding=1"
                title="Understand RTI for Telangana in 3 Minutes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="text-xs text-slate-500 mt-3 text-center">
              RTI filing explained in simple language for Telangana citizens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

