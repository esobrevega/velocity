import { Models } from "node-appwrite";

//FE
export type QuicklinkType = {
  id: string;
  title: string;
  href: string;
  img: string | File | null;
  desc: string;
};

//BE
export type Quicklinks = Models.Document & {
    title: string;
    href: string;
    imageUrl: string;
    description: string;
};