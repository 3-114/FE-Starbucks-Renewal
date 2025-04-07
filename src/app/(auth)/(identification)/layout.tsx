import OnlyIconHeader from '@/components/layout/headers/OnlyIconHeader';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <OnlyIconHeader type="identification" />
      {children}
    </>
  );
}
