import SignUpHeader from '@/components/layout/headers/SignUpHeader';

export default async function StepLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ step: string }>;
}) {
  console.log('지금부터 시작');
  console.log('Received params:', params);

  const resolvedParams = await params;
  const step = resolvedParams.step;

  console.log(step);
  return (
    <>
      <SignUpHeader section="signup" step={Number(step)} />
      {children}
    </>
  );
}
