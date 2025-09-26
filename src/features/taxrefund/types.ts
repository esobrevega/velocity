import { Models } from "node-appwrite";

export type TaxRefundType = {
    $id: string;
    state: string;
    href: string;
}

export type TaxRefunds = Models.Document & {
    state: string;
    href: string;
};