import React from 'react'

export default function layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
    {/* mainHeader 왼쪽:menu, 중앙 로고 혹은 페이지이름 , 오른쪽 검색, 장바구니 아이콘 */}
      {children}
    </>
  )
}
