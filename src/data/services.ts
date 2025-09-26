import { Briefcase, FileText, Building, PiggyBank, Landmark, House, LucideIcon, Building2, Globe, Shield, BarChart, CreditCard, Home } from "lucide-react";

export interface ServicesProps {
  name: string,
  icon: LucideIcon
}

export const services: ServicesProps[] = [
  { name: "Taxes", icon: FileText },
  { name: "Small Business", icon: Briefcase },
  { name: "Insurances", icon: Building },
  { name: "Retirement", icon: PiggyBank },
  { name: "Estate Planning", icon: Landmark },
  { name: "Real Estate", icon: House },
];

export interface ServicesMenuProps {
  link: string,
  text: string
  image: string,
}



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



export type AdvServicesProps = {
  id: string
  icon: LucideIcon
  title: string
  shortDesc: string
  image: string
  accentColor: string
  category: string
  details: {
    description: string
    features: string[]
    benefits: string[]
    price: string
    popular: boolean
  }
}

export const advServices: AdvServicesProps[] = [
  {
    id: "taxes",
    icon: FileText,
    title: "Tax Services",
    shortDesc: "Maximize refunds & minimize liabilities",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1200&auto=format&fit=crop",
    accentColor: "violet-500",
    category: "ESSENTIAL",
    details: {
      description:
        "Transform tax season from stress to success with our comprehensive tax expertise and personalized strategies.",
      features: [
        "Individual & Business Tax Prep",
        "Strategic Tax Planning",
        "IRS Audit Defense",
        "Multi-State Filing",
        "Tax Optimization Strategies",
        "Year-Round Support",
      ],
      benefits: [
        "Average $2,847 refund increase",
        "100% accuracy guarantee",
        "Expert IRS representation",
        "Same-day e-filing",
      ],
      price: "$149",
      popular: true,
    },
  },
  {
    id: "business",
    icon: Building2,
    title: "Business Setup",
    shortDesc: "Launch your company with confidence",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1200&auto=format&fit=crop",
    accentColor: "emerald-500",
    category: "STARTUP",
    details: {
      description:
        "From LLCs to corporations, we’ll help you choose and register the right business entity for success.",
      features: [
        "LLC & Corporation Formation",
        "Registered Agent Services",
        "State & Federal Filings",
        "Bylaws & Operating Agreements",
      ],
      benefits: [
        "Start in as little as 24 hours",
        "Avoid costly mistakes",
        "Stay compliant from day one",
      ],
      price: "$299",
      popular: false,
    },
  },
  {
    id: "consulting",
    icon: Briefcase,
    title: "Financial Consulting",
    shortDesc: "Expert advice tailored to your goals",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop",
    accentColor: "blue-500",
    category: "ADVISORY",
    details: {
      description:
        "Our consultants provide insights to maximize profitability, reduce risks, and guide long-term success.",
      features: [
        "One-on-One Coaching",
        "Cash Flow Analysis",
        "Growth Roadmaps",
        "Quarterly Check-Ins",
      ],
      benefits: [
        "Clarity on your financial future",
        "Reduce financial risks",
        "Tailored growth strategies",
      ],
      price: "$399",
      popular: false,
    },
  },
  {
    id: "analytics",
    icon: BarChart,
    title: "Business Analytics",
    shortDesc: "Turn data into actionable insights",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    accentColor: "indigo-500",
    category: "INSIGHTS",
    details: {
      description:
        "Leverage advanced analytics tools and dashboards to make smarter decisions, faster.",
      features: [
        "Custom Dashboards",
        "Real-Time Reporting",
        "KPI Tracking",
        "Data Forecasting",
      ],
      benefits: [
        "Save hours on manual reporting",
        "Spot trends before competitors",
        "Make data-backed decisions",
      ],
      price: "$249",
      popular: true,
    },
  },
  {
    id: "compliance",
    icon: Shield,
    title: "Compliance & Legal",
    shortDesc: "Stay compliant, avoid penalties",
    image: "https://images.unsplash.com/photo-1594737625785-827a1a823162?q=80&w=1200&auto=format&fit=crop",
    accentColor: "red-500",
    category: "SECURITY",
    details: {
      description:
        "Ensure your business operations remain compliant with state, federal, and industry standards.",
      features: [
        "Regulatory Filings",
        "Data Security Audits",
        "Policy Drafting",
        "Employee Compliance Training",
      ],
      benefits: [
        "Avoid costly legal issues",
        "Maintain customer trust",
        "Peace of mind",
      ],
      price: "$199",
      popular: false,
    },
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "Payment Solutions",
    shortDesc: "Accept payments globally with ease",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
    accentColor: "teal-500",
    category: "FINTECH",
    details: {
      description:
        "Secure, scalable, and fast payment processing solutions for modern businesses.",
      features: [
        "Multi-Currency Support",
        "Fraud Protection",
        "Recurring Billing",
        "Seamless Checkout",
      ],
      benefits: [
        "Expand customer base",
        "Boost conversion rates",
        "Low transaction fees",
      ],
      price: "$99",
      popular: true,
    },
  },
  // --- New services replacing Global Expansion ---
  {
    id: "insurances",
    icon: Shield,
    title: "Insurances",
    shortDesc: "Protect what matters most",
    image: "https://images.unsplash.com/photo-1588776814546-8c0a3b6d06d7?q=80&w=1200&auto=format&fit=crop",
    accentColor: "red-400",
    category: "SECURITY",
    details: {
      description: "Comprehensive insurance solutions for businesses and individuals.",
      features: ["Health Insurance", "Liability Coverage", "Property Insurance"],
      benefits: ["Peace of mind", "Financial protection", "Risk mitigation"],
      price: "$199",
      popular: false,
    },
  },
  {
    id: "retirement",
    icon: Briefcase,
    title: "Retirement",
    shortDesc: "Plan for your future with confidence",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    accentColor: "blue-400",
    category: "ADVISORY",
    details: {
      description: "Retirement planning strategies tailored to your goals.",
      features: ["401(k) Setup", "Pension Advice", "Investment Planning"],
      benefits: ["Financial security", "Tax-advantaged growth", "Peace of mind"],
      price: "$399",
      popular: false,
    },
  },
  {
    id: "estate",
    icon: Globe,
    title: "Estate Planning",
    shortDesc: "Secure your legacy",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    accentColor: "orange-400",
    category: "GROWTH",
    details: {
      description: "Plan your estate to protect assets and heirs.",
      features: ["Wills & Trusts", "Asset Protection", "Inheritance Planning"],
      benefits: ["Peace of mind", "Minimize taxes", "Secure legacy"],
      price: "$499",
      popular: false,
    },
  },
  {
    id: "real-estate",
    icon: Home,
    title: "Real Estate",
    shortDesc: "Invest wisely in property",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    accentColor: "teal-400",
    category: "INVESTMENT",
    details: {
      description: "Comprehensive real estate investment guidance and management.",
      features: ["Property Analysis", "Market Research", "Rental Management"],
      benefits: ["Maximize ROI", "Reduce risk", "Grow wealth"],
      price: "$599",
      popular: false,
    },
  },
]
