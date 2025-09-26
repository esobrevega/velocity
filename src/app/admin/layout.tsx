import { FooterVte } from "@/components/layout-c/footer-vte";
import { NavBarComb } from "@/components/layout-c/navbar";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <NavBarComb />
            {children}
            <FooterVte />
        </main>
    )
}

export default AuthLayout;