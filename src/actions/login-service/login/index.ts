'use server'

import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  if (!username || !password) {
    console.error('입력값 누락')
    return
  }

  const isAuthenticated = username === 'test' && password === '1234'

  if (!isAuthenticated) {
    console.error('로그인 실패')
    return
  }

  redirect('/')
}
