import { WelcomeUserCardProps } from '@/types/Initial/InitialDataTypes';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { DummyUserInfo } from '@/data/LoginData';
import {
  DummyUserInfo as PrivacyConsentData,
  DummyTossInfo,
} from '@/data/SignUpData';

const dataMap: Record<string, WelcomeUserCardProps> = {
  login: DummyUserInfo,
  privacyconsent: PrivacyConsentData,
  tos: DummyTossInfo,
  identification: {
    avatarname: '인증을 진행해 주세요',
    greeting: '본인확인을 위해',
  },
  createuser: {
    avatarname: '입력해 주세요.',
    greeting: '아이디와 비밀번호를',
  },
  email: {
    avatarname: '입력해 주세요.',
    greeting: '이메일을',
  },
  nickname: {
    avatarname: '입력해 주세요.',
    greeting: '닉네임을',
  },
};

export default function WelcomeUserCard({
  type,
  size,
  className,
}: {
  type: keyof typeof dataMap;
  size?: string;
  className?: string;
}) {
  const data = dataMap[type];
  const { avatarname, avatarUrl, greeting, message } = data;
  return (
    <section className="w-full space-y-4 pt-15 pb-10 px-7 tracking-tighter">
      {avatarUrl && (
        <Avatar style={{ width: size ?? '5rem', height: size ?? '5rem' }}>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{avatarname?.charAt(0) ?? ''}</AvatarFallback>
        </Avatar>
      )}
      <h1 className={`text-3xl font-bold ${className}`}>
        {greeting}
        <br />
        {avatarname}
      </h1>
      <p className="text-md font-medium leading-normal text-[#717171]">
        {message}
      </p>
    </section>
  );
}
