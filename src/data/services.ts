import { Briefcase, FileText, Building, PiggyBank, Landmark, House, LucideIcon } from "lucide-react";

export interface ServicesProps {
    name: string,
    icon: LucideIcon
}

export interface ServicesMenuProps {
    link: string,
    text: string
    image: string,
}

export const services: ServicesProps[] = [
    { name: "Taxes", icon: FileText },
    { name: "Small Business", icon: Briefcase },
    { name: "Insurances", icon: Building },
    { name: "Retirement", icon: PiggyBank },
    { name: "Estate Planning", icon: Landmark },
    { name: "Real Estate", icon: House },
];

export const servicesMenu: ServicesMenuProps[] = [
    {
        link: '#',
        text: 'Taxes',
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        link: '#',
        text: 'Small Business',
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        link: '#',
        text: 'Insurance',
        image: "https://example.com/icons/insurance-hand-shield.png" // replace with your own hosting
    },
    {
        link: '#',
        text: 'Retirement',
        image: "https://example.com/icons/retirement-rocking-chair.png"
    },
    {
        link: '#',
        text: 'Estate Planning',
        image: "https://example.com/icons/estate-shield-alternate.png"
    },
    {
        link: '#',
        text: 'Real Estate',
        image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
];


