'use client';
import NomalSeparator from '@/components/separator/NomalSeparator';
import BottomButtonWrapper from '../layout/Footers/BottomButtonWrapper';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { LoginUnderMenuData } from '@/data/LoginData';
import { FormWrapper } from '../wrapper/FormWrapper';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    try {
      const result = await signIn('credentials', {
        email,
        password,
        callbackUrl: '/',
      });
      
      if (result?.error) {
        console.error('로그인 실패:', result.error);
      } else {
      }
    } catch (error) {
      console.error('로그인 오류:', error);
    }
  };
  return (
    <FormWrapper.OnSubmit onSubmit={handleLogin}>
      <Input
        name="email"
        type="text"
        placeholder="아이디"
        variant="login"
        autoComplete="email"
        className="text-xl font-normal py-3 transition-all placeholder:text-2xl placeholder:text-black"
      />
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        variant="login"
        autoComplete="current-password"
        className="text-xl font-normal py-3 tracking-tighter transition-all placeholder:text-2xl placeholder:text-black"
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
