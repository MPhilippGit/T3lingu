import { AppSidebar } from "@/components/custom/app-sidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export default function Dashboard({ ...props }) {
    return (
        <SidebarProvider>
            <AppSidebar headline="T3Lingu" />
            <SidebarInset>
                <header className="flex h-12 items-center gap-2 px-4 border-b">
                    <SidebarTrigger />
                </header>
                <main>

                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
