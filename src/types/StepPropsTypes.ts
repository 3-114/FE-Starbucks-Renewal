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

export interface StepProps {
  id: number;
  header?: HeaderType;
  content: (args: {
    formData?: FormData;
    onNext?: () => void;
    onInput?: (name: keyof FormData, value: string | boolean | number) => void;
  }) => React.ReactNode;
}
