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

export interface WelcomeUserCardProps {
    username?: string
    message?: string
    avatarUrl?: string
    greeting?: string
  }