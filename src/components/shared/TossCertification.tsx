import React from 'react'

export default function TossCertification() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 text-center">
      
      {/* 상단 이미지와 텍스트 */}
      <div className="mb-6">
        <img src="/lock-icon.svg" alt="자물쇠 이미지" className="mx-auto w-16 h-16" />
        <p className="mt-4 text-lg font-semibold">본인 인증을 위하여 토스로 이동해요.</p>
        <p className="text-sm text-gray-500">아래 버튼을 눌러 인증해 주세요.</p>
      </div>

      {/* 인증 버튼 */}
      <button
        onClick={() => {/* 여기에 토스 인증 로직 or 이동 */}}
        className="bg-green-500 text-white py-3 px-6 rounded-lg text-base font-medium"
      >
        토스로 인증하기
      </button>

      {/* 대체 인증 링크 */}
      <p className="mt-4 text-sm text-gray-500 underline underline-offset-2 cursor-pointer">
        토스앱이 없을 경우 휴대폰 인증도 가능해요 &gt;
      </p>

      {/* 하단 안내 메시지 */}
      <div className="mt-10 w-full max-w-sm text-xs text-gray-400">
        <p>• 휴대폰에서 토스앱 설치가 되어있는지 확인해 주세요.</p>
        <p>• 토스 > 우측하단 “전체” > “전자서명 인증” 메뉴에서 인증요청 내용을 확인하실 수 있어요.</p>
        <p>• 문제가 계속된다면, 토스 고객센터: 1599-4905로 문의해 주세요.</p>
      </div>
    </div>
  );
};