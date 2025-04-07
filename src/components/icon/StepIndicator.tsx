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
          <div
            className={`relative flex items-center justify-center w-4 h-4 rounded-full ${
              index + 1 <= currentStep
                ? 'bg-black text-white'
                : 'border border-[#B9B9B9] text-[#B9B9B9]'
            }`}
          >
            <span className="text-[11px] font-medium">{index + 1}</span>
          </div>

          {index < totalSteps - 1 && (
            <div
              className={`w-2 h-[0.5px] ${
                index + 1 < currentStep ? 'bg-black' : 'bg-[#B9B9B9]'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
