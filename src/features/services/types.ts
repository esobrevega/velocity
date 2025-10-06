import { Models } from "node-appwrite";

// FE Type
export type ServiceType = {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  img: string | File | null;
  category: string;
  description: string;
  features: string[];
  benefits: string[];
  popular: boolean;
};

// BE Type (Appwrite Document)
export type ServiceDoc = Models.Document & {
  icon: string;
  title: string;
  shortDesc: string;
  image: string;
  category: string;
  description: string;
  features: string[];
  benefits: string[];
  popular: boolean;
};
