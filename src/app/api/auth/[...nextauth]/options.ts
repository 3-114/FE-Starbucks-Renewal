/* eslint-disable @typescript-eslint/no-explicit-any */

import { commonResponseType, signInDataType } from '@/types/ResponseDataTypes';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        console.log('credentials', credentials);
        try {
          const response = await fetch(
            `${process.env.API_BASE_URL}/auth-service/sign-in`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          const user =
            (await response.json()) as commonResponseType<signInDataType>;
          console.log('user', user);
          return user.result;
        } catch (error) {
          console.error('error', error);
        }
        // 회원로그인 api 호출
        return null;
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (profile && account) {
        console.log('profile', profile);
        console.log('account', account);
        console.log('user', user);
        try {
          const res = await fetch(
            `http://localhost:8080/api/v1/auth/oauth-sign-in`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                provider: account.provider,
                providerId: account.providerAccountId,
                providerEmail: 'beat1103@gmail.com',
              }),
              cache: 'no-cache',
            }
          );
          const data = (await res.json()) as commonResponseType<signInDataType>;
          console.log('server data', data);
          user.accessToken = data.result.accessToken;
          // user.refreshToken = data.result.refreshToken;
          user.name = data.result.name;
          user.uuid = data.result.uuid;
          console.log('kakao', user);
          return true;
        } catch (error) {
          console.error('error', error);
          return '/sign-up';
        }
      }
      console.log('user', user);
      return true;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: '/login',
    error: '/error',
  },
};
