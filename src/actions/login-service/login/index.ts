'use server'

import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  // ✅ Step 1: 유효성 검사 (간단히만)
  if (!username || !password) {
    console.error('입력값 누락')
    return
  }

  // ✅ Step 2: 로그인 로직 (임시 하드코딩)
  const isAuthenticated = username === 'test' && password === '1234'

  if (!isAuthenticated) {
    console.error('로그인 실패')
    return
  }

  // ✅ Step 3: 로그인 성공 시 리디렉션
  redirect('/')
}
