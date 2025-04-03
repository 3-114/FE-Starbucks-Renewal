import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';


export default function TossCertification() {
  return (
    <section className="pt-20 space-y-6 text-center tracking-tighter">
      <div className="w-full px-16">
        <Image
          src="/lockImg.png"
          alt="자물쇠 이미지"
          width={200}
          height={140}
        />
      </div>
      <div className="text-base/normal font-semibold text-[#6B6B6B]">
      <p>
        본인인증을 위하여 토스로 이동해 주세요.
        <br />
        아래 버튼을 눌러 인증해 주세요.
      </p>
      </div>
      <Button
          variant="largetpye"
          size="md"
          className="w-[134px]"
        >
          토스로 인증하기
        </Button>
      <Link href={'/'} className="flex pt-54 space-x-[2px] justify-center items-center">
        <p className="text-xs text-[#9E9E9E] font-medium underline">토스앱이 없을 경우 휴대폰 인증도 가능해요</p>
        <ChevronRight size={20} color="#9E9E9E"/>
      </Link>
      <div className="px-4 text-start bg-[#F7F7F7] text-sm/normal text-[#6B6B6B] space-y-[2px]">
        <p>문제 발생 시 조치방법</p>
        <ul className="list-disc font-normal">
          <li>휴대폰에서 토스앱 설치가 되어있는지 확인해 주세요.</li>
          <li>
            토스앱 &gt; 우측하단 <strong>‘전체’</strong> &gt; <strong>보안과 인증</strong> &gt; 
            <strong> 토스인증서</strong>에서 인증요청 내용을 확인하실 수 있습니다.
          </li>
          <li>문제가 계속된다면, 토스 고객센터: 1599-4905로 문의바랍니다.</li>
        </ul>
      </div>
    </section>
  );
};