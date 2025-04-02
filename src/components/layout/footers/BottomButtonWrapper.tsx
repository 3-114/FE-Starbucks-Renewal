import React from 'react';

export default function BottomButtonWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full px-7 fixed bottom-5 left-0">{children}</div>;
}
