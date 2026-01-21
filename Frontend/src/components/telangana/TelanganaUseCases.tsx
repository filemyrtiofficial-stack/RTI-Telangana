import React from 'react';
import { useNavigate } from 'react-router-dom';

interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
}

const useCases: UseCase[] = [
  {
    id: '1',
    title: 'Dharani / Land Records',
    description: 'Get land records, property documents, and revenue information from Telangana Dharani portal and Revenue Department.',
    icon: '🏞️',
    route: '/services/custom-rti',
  },
  {
    id: '2',
    title: 'Schemes & Subsidies',
    description: 'File RTI to know about government schemes, subsidy status, benefit distribution, and welfare program details.',
    icon: '💰',
    route: '/services/custom-rti',
  },
  {
    id: '3',
    title: 'Municipal & Local Body Services',
    description: 'Get information about municipal services, local body decisions, property tax, and civic amenities.',
    icon: '🏛️',
    route: '/services/custom-rti',
  },
];

export const TelanganaUseCases: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container-responsive max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Use Cases
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common RTI requests from Telangana citizens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg hover:border-primary-400 transition-all duration-200 cursor-pointer"
              onClick={() => navigate(useCase.route)}
            >
              <div className="text-5xl mb-4 text-center">{useCase.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {useCase.title}
              </h3>
              <p className="text-gray-600 text-center">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

