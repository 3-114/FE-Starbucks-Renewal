'use client';
import NomalSeparator from '@/components/separator/NomalSeparator';
import BottomButtonWrapper from '../layout/Footers/BottomButtonWrapper';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { LoginUnderMenuData } from '@/data/LoginData';
import { FormWrapper } from '../wrapper/FormWrapper';

export default function LoginForm() {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted');
    const formData = new FormData(event.currentTarget);
    const payload = {
      username: formData.get('username'),
      password: formData.get('password'),
    };
    console.log(payload);
    // next-auth login
  };
  return (
    <FormWrapper.OnSubmit onSubmit={handleLogin}>
      <Input
        name="username"
        type="text"
        placeholder="아이디"
        variant="login"
        autoComplete="username"
        className="text-3xl font-normal py-3 transition-all placeholder:text-2xl placeholder:text-gray-500"
      />
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        variant="login"
        autoComplete="current-password"
        className="text-5xl font-normal py-3 tracking-tighter transition-all placeholder:text-2xl placeholder:text-gray-500"
      />
      <NomalSeparator
        data={LoginUnderMenuData}
        className="pt-8 flex justify-center leading-0 font-normal text-sm text-slate-600 whitespace-nowrap"
      />

      <BottomButtonWrapper className="px-7">
        <Button
          type="submit"
          variant="largetpye"
          size="lg"
          className="w-full text-lg font-bold py-6"
        >
          로그인하기
        </Button>
      </BottomButtonWrapper>
    </FormWrapper.OnSubmit>
  );
}
