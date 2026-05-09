import { LucideIcon, Mail,Phone,MapPin } from "lucide-react";

interface ContactData {
    icon:LucideIcon;
    title: string;
    content: string;
  }
export const ContactsData:ContactData[] = [
    {
        icon: Mail,
        title: 'Email',
        content: 'mohamedlouahchi9@gmail.com'
    },
    {
        icon: Phone,
        title: 'Phone',
        content: '+213 775 34 91 15'
    },
    {
        icon: MapPin,
        title: 'Location',
        content: 'Dar El Beida, Algiers, Algeria'
    }
  ]