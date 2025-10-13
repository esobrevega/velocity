import { Models } from "node-appwrite";

export type ContactUsType = {
    $id: string;
    name: string;
    phoneNumber: string;
    email: string;
    service: string;
    time: string;
    message: string;
}

export type ContactUs = Models.Document & {
    name: string;
    phoneNumber: string;
    email: string;
    service: string;
    time: string;
    message: string;
};