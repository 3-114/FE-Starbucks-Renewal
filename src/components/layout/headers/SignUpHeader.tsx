'use client';

// import { getHeaderData } from '@/actions/header-fetch/getHeaderData';
import StepIndicator from '@/components/icon/StepIndicator';
import { GnbType } from '@/types/Initial/InitialDataTypes';

import { SignUpHeaderData } from '@/data/HeaderData';

export default function SignUpHeader({
  // section,
  step,
}: {
  // section: string;
  step: number;
}) {
  // const HeaderData = await getHeaderData(section);
  const HeaderData = SignUpHeaderData;

  return (
    <header className="w-full px-3 py-4">
      <nav>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-3">
            {HeaderData.map((menu: GnbType) => (
              <menu.icon key={menu.id} className="w-6 h-6 text-black" />
            ))}
          </div>
          <div className="flex-1 flex justify-center">
            <StepIndicator currentStep={step} />
          </div>
          <div className="w-6" />
        </div>
      </nav>
    </header>
  );
}
