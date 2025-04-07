export type SignupFormData = {
  verified: boolean;
  userId: string;
  password: string;
  passwordConfirm: string;
  agreeTerms: boolean;
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
  onInput: (name: keyof SignupFormData, value: string | boolean | number) => void;
  onNext: () => void;
}

export interface StepProps {
  id: number;
  header?: HeaderType;
  content: (args: {
    formData: SignupFormData;
    onNext: () => void;
    onInput: (name: keyof SignupFormData, value: string | number | boolean) => void;
  }) => React.ReactNode;
}
