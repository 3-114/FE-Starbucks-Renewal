import { CheckBoxGroup } from '@/components/shared/CheckBoxGroup';
import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import { Button } from '@/components/ui/button';
export default function TossPrivacyForm() {
  return (
      <BottomButtonWrapper className='space-y-2 px-7'>
        <CheckBoxGroup label="[필수] 개인정보 제 3자 제공 동의" className="text-lg font-bold" link="/"/>
        <Button
            variant="largetpye"
            size="agree"
            className="w-full"
            color='blue'
          >
            동의하기
          </Button>
          <Button
            variant="largetpye"
            size="agree"
            className="w-full text-black shadow-none"
            color='white'
          >
            닫기
          </Button>
      </BottomButtonWrapper>
  )
}
