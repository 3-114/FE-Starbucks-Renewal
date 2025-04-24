import React from 'react';

function Action({
  action,
  children,
}: {
  action: (dataForm: FormData) => Promise<void>;
  children: React.ReactNode;
}) {
  return (
    <form action={action} className="w-full relative space-y-4 px-7">
      {children}
    </form>
  );
}

function OnSubmit({
  onSubmit,
  children,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <form onSubmit={onSubmit} className="w-full relative space-y-4 px-7">
      {children}
    </form>
  );
}

export const FormWrapper = {
  Action,
  OnSubmit,
};
