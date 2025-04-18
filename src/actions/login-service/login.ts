'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  const response = await fetch(`${process.env.API_BASE_URL}/sign-in`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
    cache: 'no-store',
  });

  const data = await response.json();

  if (!response.ok || !data.isSuccess) {
    throw new Error(data.message ?? '로그인 실패');
  }

  const accessToken = data.result.accessToken;

  const cookieStore = await cookies();
  cookieStore.set('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
  });

  redirect('/');
}
