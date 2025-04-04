import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps = 4,
}) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          {/* 스텝 원형 */}
          <div
            className={`relative flex items-center justify-center w-6 h-6 rounded-full ${
              index + 1 <= currentStep
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            <span className="text-xs font-medium">{index + 1}</span>
          </div>

          {/* 연결선 (마지막 원형 이후에는 제외) */}
          {index < totalSteps - 1 && (
            <div
              className={`w-8 h-0.5 ${
                index + 1 < currentStep ? 'bg-black' : 'bg-gray-200'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
