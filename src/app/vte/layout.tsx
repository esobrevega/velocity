import { NavBarComb } from "@/components/layout-c/navbar";
import { StickyFooter } from "@/components/layout-c/sticky-footer";

interface VTELayoutProps {
    children: React.ReactNode;
}

const VTELayout = ({ children }: VTELayoutProps) => {
    return (
        <main className="min-h-screen flex flex-col bg-gray-700">
            <div className='flex-1 overflow-clip rounded-b-32 z-20'>
                <NavBarComb />
                {children}
            </div>
            <StickyFooter />
        </main>
    )
}

export default VTELayout;