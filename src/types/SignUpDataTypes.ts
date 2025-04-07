export type FormData = {
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

export interface StepProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
}
