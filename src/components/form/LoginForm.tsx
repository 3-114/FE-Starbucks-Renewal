import { Input } from '@/components/ui/input';
import NomalSeparator from '../separator/NomalSeparator';
import BottomButtonWrapper from '../layout/footers/BottomButtonWrapper';
import { Button } from '../ui/button';

export default function LoginForm() {
  return (
    <form className="w-full relative space-y-4">
      <Input name="username" type="text" placeholder="아이디" variant="login" />
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        variant="login"
      />
      <NomalSeparator />

      <BottomButtonWrapper>
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
