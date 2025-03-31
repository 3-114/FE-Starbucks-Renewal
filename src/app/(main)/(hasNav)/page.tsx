import { Button } from "@/components/ui/button"

export default function page() {
  return (
    <div className="flex flex-col px-7">
      동의하기
      <Button variant="largetpye" size="agree" color="blue"> 동의하기 </Button>
      <Button variant="largetpye" size="agree" color="white" className="text-black"> 닫기 </Button>
      물건 상세페이지 버튼
      <Button variant="largetpye" size="detailedproduct"> 구매하기 </Button>
      장바구니 버튼
      <div className="flex flex-col gap-1 w-[166px]">
      <Button variant="largetpye" size="cart"> 구매하기 </Button>
      <Button variant="largetpye" size="cart"> 선물하기 </Button>
      <Button variant="largetpye" size="cart"> 구매하기 </Button>
      <Button variant="largetpye" size="cart" color="white" className="text-[#01A862] border border-[#01A862]"> 선물하기 </Button>
      </div>
      결제 페이지 버튼
      <Button variant="largetpye" size="xl" amount={2000}>원 결제하기 </Button>
      쿠폰 버튼
      <Button variant="largetpye" size="xl"> 쿠폰 모두 받기 </Button>
      등록하기
      <Button variant="largetpye" size="xl" color="gray" className="text-white"> 등록하기 </Button>
      다음 버튼
      <Button variant="largetpye" size="xl"> 다음 </Button>
      다음 버튼
      <Button variant="largetpye" size="lg" color="gray" className="text-white"> 다음 </Button>
      <Button variant="largetpye" size="lg" color="gray" className="text-white"> 다음 </Button>
      위로 올리기 버튼
      <Button variant="largetpye" size="lg" color="darkGray" className="text-black w-[40px]"> ^ </Button>
      토스로 인증하기
      <Button variant="largetpye" size="md"> 토스로 인증하기</Button>
      form 안에 있는 버튼들
      <div className="flex flex-col gap-1 w-[107px]">
      <Button variant="middletpye" size="formmd" color="white" className="text-[#01A862] border border-[#01A862]"> 주소검색 </Button>
      <Button variant="middletpye" size="formmd" color="white" className="text-[#01A862] border border-[#01A862]"> 배송지 등록 </Button>
      </div>
      태그버튼
      <div>
        <Button variant="middletpye" size="tag"> #스텐리 </Button>
      </div>
      등록하기 버튼
      <div>
      <Button variant="smalltpye" size="sm" color="white" className="text-[#01A862] border border-[#01A862]"> 등록하기</Button>
      </div>
      장바구니 전용 버튼
      <div>
        <Button variant="smalltpye" size="xs" color="white" className="text-[#01A862] border border-[#01A862]"> X </Button>
      </div>
    </div>
  )
}
