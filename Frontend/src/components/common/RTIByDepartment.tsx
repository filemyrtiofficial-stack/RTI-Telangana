import React, { memo, useCallback, useState } from 'react';
import { PDFDownloadModal } from './PDFDownloadModal';
import { hasPDF } from '../../utils/pdfMapping';

// Telangana departments organized in columns (similar to the original Delhi layout)
// Export for use in other components
export const telanganaDepartments = [
  {
    category: 'RTI Telangana Police & Security',
    items: [
      'RTI Telangana Police Department',
      'RTI Telangana Fire Services Department',
      'RTI Telangana Prisons Department',
      'RTI Telangana Home Department',
      'RTI Telangana Law Department',
      'RTI Telangana Disaster Management Department',
    ],
  },
  {
    category: 'RTI Telangana Municipal & Housing',
    items: [
      'RTI Greater Hyderabad Municipal Corporation (GHMC)',
      'RTI Telangana Municipal Administration & Urban Development Department',
      'RTI Telangana Housing Department',
      'RTI Telangana Public Works Department (PWD)',
      'RTI Telangana Panchayat Raj & Rural Development Department',
      'RTI Telangana Urban Development Department',
    ],
  },
  {
    category: 'RTI Telangana Utilities & Infrastructure',
    items: [
      'RTI Telangana Water Resources Department',
      'RTI Telangana Energy Department',
      'RTI Telangana State Transmission Corporation (TSTRANSCO)',
      'RTI Telangana State Power Generation Corporation (TSGENCO)',
      'RTI Telangana State Southern Power Distribution Company (TSSPDCL)',
      'RTI Telangana State Northern Power Distribution Company (TSNPDCL)',
      'RTI Telangana Irrigation & CAD Department',
    ],
  },
  {
    category: 'RTI Telangana Government Services',
    items: [
      'RTI Telangana Secretariat',
      'RTI Telangana Revenue Department',
      'RTI Telangana Education Department',
      'RTI Telangana Health & Family Welfare Department',
      'RTI Telangana Transport Department',
      'RTI Telangana Finance Department',
      'RTI Telangana Registration & Stamps Department',
      'RTI Telangana Planning Department',
    ],
  },
  {
    category: 'RTI Telangana Social Welfare',
    items: [
      'RTI Telangana Social Welfare Department',
      'RTI Telangana Scheduled Castes Development Department',
      'RTI Telangana Scheduled Tribes Welfare Department',
      'RTI Telangana Women & Child Development Department',
      'RTI Telangana Backward Classes Welfare Department',
      'RTI Telangana Minority Welfare Department',
      'RTI Telangana Youth & Sports Department',
    ],
  },
  {
    category: 'RTI Telangana Commerce & Industry',
    items: [
      'RTI Telangana Labour Department',
      'RTI Telangana Industries & Commerce Department',
      'RTI Telangana Commercial Taxes Department',
      'RTI Telangana Food & Civil Supplies Department',
      'RTI Telangana Agriculture & Cooperation Department',
      'RTI Telangana Handlooms & Textiles Department',
    ],
  },
  {
    category: 'RTI Telangana Environment & Resources',
    items: [
      'RTI Telangana Environment Department',
      'RTI Telangana Forest Department',
      'RTI Telangana Mines & Geology Department',
      'RTI Telangana Water Resources Department',
    ],
  },
  {
    category: 'RTI Telangana Culture & Tourism',
    items: [
      'RTI Telangana Tourism & Culture Department',
      'RTI Telangana Information & Public Relations Department',
      'RTI Telangana Archaeology Department',
      'RTI Telangana Endowments Department',
    ],
  },
  {
    category: 'RTI Telangana Information & Technology',
    items: [
      'RTI Telangana Information Technology Department',
      'RTI Telangana State Technology Services (TSTS)',
      'RTI Telangana State FibreNet Limited',
      'RTI Telangana State Innovation Cell',
    ],
  },
  {
    category: 'RTI Telangana Education & Health',
    items: [
      'RTI Telangana School Education Department',
      'RTI Telangana Higher Education Department',
      'RTI Telangana Technical Education Department',
      'RTI Telangana Medical & Health Department',
      'RTI Telangana State Medical Services & Infrastructure Development Corporation (TSMSIDC)',
    ],
  },
];

const RTIByDepartmentComponent: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDepartmentClick = useCallback((department: string) => {
    // Check if PDF exists for this department
    if (hasPDF(department)) {
      setSelectedDepartment(department);
      setIsModalOpen(true);
    } else {
      // If no PDF, show alert
      console.warn(`No PDF found for department: ${department}`);
      alert('PDF template not available for this department yet. Please contact support.');
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedDepartment(null);
  }, []);

  return (
    <>
      <section className="bg-white py-12 md:py-16 lg:py-20" aria-label="RTI Services by Telangana Department">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              RTI for Telangana Government Departments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You can file RTI applications for almost any Telangana Government department or authority. Below are some commonly used categories. We also support RTI filing for other departments that are not listed here.
            </p>
          </div>

          {/* Compact Multi-Column Layout */}
          <nav aria-label="RTI Department Navigation" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-4">
              {telanganaDepartments.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{column.category}</h3>
                  <ul className="space-y-0.5">
                    {column.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <button
                          onClick={() => handleDepartmentClick(item)}
                          className="text-xs leading-tight text-gray-700 hover:text-primary-600 cursor-pointer transition-colors duration-150 block text-left w-full"
                          aria-label={`Download RTI template for ${item}`}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* PDF Download Modal */}
      {selectedDepartment && (
        <PDFDownloadModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          departmentName={selectedDepartment}
        />
      )}
    </>
  );
};

export const RTIByDepartment = memo(RTIByDepartmentComponent);

