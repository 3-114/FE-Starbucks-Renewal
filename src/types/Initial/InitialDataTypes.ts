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

export interface MainHeaderGubType {
    id: number;
    title: string;
    hamburgericon: React.FC<React.SVGProps<SVGSVGElement>>;
    searchicon : React.FC<React.SVGProps<SVGSVGElement>>;
    carticon :  React.FC<React.SVGProps<SVGSVGElement>>;
    xicon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface WelcomeUserCardProps {
    username?: string
    message?: string
    avatarUrl?: string
    greeting?: string
  }