export type AgreementItem = {
  id: number;
  checked: boolean;
};

export type SignupFormData = {
  verified: boolean;
  userId: string;
  password: string;
  passwordConfirm: string;
  email: string;
  nickname: string;
  agreements: AgreementItem[];
};

export interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
}

type HeaderPropsMap = {
  OnlyIconHeader: { type: 'identification' | 'signup' };
  SignUpHeader: { step: number };
};

type HeaderType = {
  [K in keyof HeaderPropsMap]: {
    type: K;
    props: HeaderPropsMap[K];
  };
}[keyof HeaderPropsMap];

export interface StepContentProps {
  formData: SignupFormData;
  onInput: (
    name: keyof SignupFormData,
    value: string | boolean | number
  ) => void;
  onNext: () => void;
  onPrev: () => void;
  goTo: (stepKey: string) => void;
}

export interface StepProps {
  id: number;
  key: string;
  header?: HeaderType;
  content: (args: StepContentProps) => React.ReactNode;
}
