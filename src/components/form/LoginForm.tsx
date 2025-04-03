import NomalSeparator from '@/components/separator/NomalSeparator';
import BottomButtonWrapper from '../layout/Footers/BottomButtonWrapper';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { LoginUnderMenuData } from '@/data/LoginData';

export default function LoginForm() {
  return (
    <form className="w-full relative space-y-4 px-7">
      <Input name="username" type="text" placeholder="아이디" variant="login" />
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        variant="login"
      />
      <NomalSeparator
        data={LoginUnderMenuData}
        className="pt-8 flex justify-center leading-0 font-semibold whitespace-nowrap"
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
    </form>
  );
}
