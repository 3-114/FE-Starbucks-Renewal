import { WelcomeUserCardProps } from '@/types/Initial/InitialDataTypes';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function WelcomeUserCard({
  data,
  size,
  className,
}: {
  data: WelcomeUserCardProps;
  size?: string;
  className?: string;
}) {
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
