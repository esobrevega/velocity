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

export type AdvServicesProps = {
  key: string
  icon: LucideIcon
  title: string
  shortDesc: string
  image: string
  category: string
  details: {
    description: string
    features: string[]
    benefits: string[]
    popular: boolean
  }
}

export const advServices: AdvServicesProps[] = [

  //business consultation
  {
    key: "business",
    icon: Building2,
    title: "Business Consultation & Setup",
    shortDesc: "Launch your company with confidence",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1200&auto=format&fit=crop",
    category: "STARTUP",
    details: {
      description:
        "From LLCs to corporations, we’ll help you choose and register the right business entity for success.",
      features: [
        "Business Formation",
        "LLC, Corporation, Partnership",
        "EIN Registration",
        "State & Local Licensing Guidance",
        "Business Plan Consultation",
      ],
      benefits: [
        "Smooth startup process",
        "Correct structure selection",
        "Stay compliant from day one",
      ],
      popular: false,
    },
  },

  //financial consulting
  {
    key: "consulting",
    icon: Briefcase,
    title: "Financial Consulting",
    shortDesc: "Expert advice tailored to your goals",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop",
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
      popular: false,
    },
  },

  //taxes
  {
    key: "taxes",
    icon: FileText,
    title: "Tax Services",
    shortDesc: "Maximize refunds & minimize liabilities",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1200&auto=format&fit=crop",
    category: "ESSENTIAL",
    details: {
      description:
        "Transform tax season from stress to success with our comprehensive tax expertise and personalized strategies.",
      features: [
        "Individual & Business Tax Prep",
        "Strategic Tax Planning",
        "IRS Audit Assistance",
        "Multi-State Filing",
        "Tax Optimization Strategies",
        "Year-Round Support",
      ],
      benefits: [
        "Maximize your refund potential",
        "Driven by precision. Focused on your peace of mind.",
        "Fast, secure, and same-day e-filing available.",
      ],
      popular: true,
    },
  },

  //bookkeeping
  {
    key: "bookkeeping",
    icon: BarChart,
    title: "Bookkeeping, Payroll & 1099 NEC",
    shortDesc: "Reliable bookkeeping and payroll services with accurate 1099-NEC reporting",
    image: "/bookkeeping.jpg",
    category: "ACCOUNTING",
    details: {
      description:
        "Simplify your finances with professional bookkeeping, on-time payroll processing, and precise 1099 NEC filing — ensuring accuracy, compliance, and peace of mind.",
      features: [
        "Monthly Bookkeeping",
        "Payroll Processing",
        "1099-NEC Filing",
        "Quarterly & Annual Reports",
        "Profit & Loss Statements & Balance Sheets"
      ],
      benefits: [
        "Organized financial records",
        "Compliance with payroll/tax laws",
        "Stress-free year-end reporting"
      ],
      popular: true,
    },
  },

  //Legal Documentation Preparation
  {
    key: "compliance",
    icon: Shield,
    title: "Legal Documentation Preparation",
    shortDesc: "Accurate, compliant, and professionally prepared legal documents.",
    image: "/legal-doc.jpg",
    category: "COMPLIANCE",
    details: {
      description:
        "We prepare and organize personal and business legal documents to help you stay compliant with state, federal, and industry regulations — ensuring accuracy, security, and peace of mind.",
      features: [
        "Contracts",
        "Agreements",
        "Business Filings",
        "Family & Personal Legal Docs",
      ],
      benefits: [
        "Affordable and Accurate",
        "Professionally prepared documents",
        "Time-saving solutions",
      ],
      popular: false,
    },
  },

  //itin
  {
    key: "itin",
    icon: CreditCard,
    title: "Individual Taxpayer Identification Number (ITIN)",
    shortDesc: "Get assistance with ITIN applications and renewals.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
    category: "TAX",
    details: {
      description:
        "Assistance with ITIN applications and renewals for individuals without SSNs",
      features: [
        "ITIN Application Assistance",
        "Renewals",
        "Supporting Document Preparation",
        "IRS Submission"
      ],
      benefits: [
        "Hassle-free application process",
        "Fast and smooth approvals",
        "Stay compliant with IRS requirements"
      ],
      popular: true,
    },
  },

  //notary
  {
    key: "notary",
    icon: Briefcase,
    title: "Notary Services",
    shortDesc: "Reliable and certified document notarization.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    category: "LEGAL SERVICES",
    details: {
      description: "Certified notary services for personal, financial, and business documents — ensuring authenticity, legality, and peace of mind.",
      features: [
        "Document Notarization",
        "Affidavits",
        "Contracts & Agreements",
        "Oaths & Affirmations"
      ],
      benefits: [
        "Legally recognized documentation",
        "Convenient and secure service",
        "Trusted and certified professionals"
      ],
      popular: false,
    },
  },

  //insurance
  {
    key: "insurances",
    icon: Shield,
    title: "Insurance Services",
    shortDesc: "Protect what matters most with insurance planning for life, health, and business",
    image: "/insurance.jpg",
    category: "SECURITY",
    details: {
      description: "Comprehensive insurance solutions for businesses and individuals.",
      features: [
        "Life Insurance",
        "Health Insurance",
        "Medicare",
        "Long-Term Care",
        "Final Expense",
        "Business Coverage"
      ],
      benefits: [
        "Comprehensive protection",
        "Customized coverage",
        "Peace of mind for the future"
      ],
      popular: false,
    },
  },

  //estate planning
  {
    key: "estate",
    icon: Globe,
    title: "Estate Planning",
    shortDesc: "Secure your legacy",
    image: "/estate-planning.jpg",
    category: "GROWTH",
    details: {
      description: "Plan your estate to protect assets and heirs.",
      features: [
        "Wills & Trusts",
        "Medical Power of Attorney",
        "Financial Power of Attorney",
      ],
      benefits: [
        "Protect your Legacy",
        "Avoid Probate",
        "Peace of mind for your family"
      ],
      popular: false,
    },
  },

  //real estate and rentals
  {
    key: "real-estate",
    icon: Home,
    title: "Real Estate & Rentals",
    shortDesc: "Navigate real estate investments and rental management with ease",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    category: "INVESTMENT",
    details: {
      description: "Comprehensive real estate investment guidance and management.",
      features: [
        "Property Buying & Selling Guidance",
        "Rental Property Tax Support",
        "1031 Exchange Consulting",
        "Investment Analysis"
      ],
      benefits: [
        "Maximize returns",
        "Compliance with tax laws",
        "Simplified transactions"
      ],
      popular: false,
    },
  },
]
