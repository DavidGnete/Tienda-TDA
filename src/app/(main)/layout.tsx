import { Sidebar } from "@/components";
import { Footer } from "@/components/ui/footer/Footer";
import { NavbarMenu } from "@/components/ui/navbar-menu/navbarMenu";
export default function StoreLayout ({children}: {
    children: React.ReactNode;
}) {
    return (
       <main className="min-h-screen">
        <NavbarMenu/>
        <Sidebar />
        <div className="px-0 sm:px-10">
            {children}
        </div>
        <Footer />
       </main> 
    )

}