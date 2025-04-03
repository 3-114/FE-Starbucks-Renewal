export default function BottomButtonWrapper({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full fixed bottom-0 left-0 ${className}`}>
      {children}
    </div>
  );
}
