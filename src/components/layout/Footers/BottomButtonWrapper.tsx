export default function BottomButtonWrapper({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full fixed bottom-0 pb-5 left-0 bg-white ${className}`}>
      {children}
    </div>
  );
}
