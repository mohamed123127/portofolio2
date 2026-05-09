import { FaFacebook,FaInstagram,FaGithub,FaLinkedin} from "react-icons/fa";

interface SocialMedia {
    name: string;
    url: string;
    icon: React.ElementType;
}

export const MySocialMedia: SocialMedia[] = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/moha.loua.5/",
        icon: FaFacebook 
        ,
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/louahchi_mohamed/",
        icon: FaInstagram,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohamed-louahchi-55aba3238/",
        icon: FaLinkedin,
    },
    {
        name: "GitHub",
        url: "https://github.com/mohamed123127",
        icon: FaGithub,
    },
];