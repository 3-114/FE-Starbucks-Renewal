export interface GnbType {
    id: number;
    title: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface LoginUnderMenuType {
    id: number;
    title: string;
    Link: string;
}

export interface NavMenuType {
    id: number;
    title: string;
    link: string;
}

export type EventNavMenuType = {
    id: number
    eventName: string
  }

export interface WelcomeUserCardProps {
    avatarname?: string
    message?: string
    avatarUrl?: string
    greeting?: string
  }