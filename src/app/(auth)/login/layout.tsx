import OnlyIconHeader from '@/components/layout/headers/OnlyIconHeader';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OnlyIconHeader type="login" />
      {children}
    </>
  );
}
