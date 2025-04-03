import { WelcomeUserCardProps } from '@/types/Initial/InitialDataTypes';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function WelcomeUserCard({
  data,
}: {
  data: WelcomeUserCardProps;
}) {
  const { avatarname, avatarUrl, greeting, message } = data;
  return (
    <section className="space-y-4 pt-15 pb-10">
      <Avatar className="size-[5rem]">
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>{avatarname?.charAt(0) ?? ''}</AvatarFallback>
      </Avatar>
      <h1 className="text-3xl font-bold">
        {greeting}
        <br />
        {avatarname}
      </h1>
      <p className="text-md font-medium tracking-tighter leading-normal text-[#717171]">
        {message}
      </p>
    </section>
  );
}
