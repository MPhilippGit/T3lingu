import SidebarLayout from "@/Layouts/SidebarLayout";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppBreadcrumb } from "@/components/custom/app-breadcrumb";
import { AppContent } from "@/components/custom/app-content";

export default function Dashboard({ ...data }) {
    return (
        <SidebarLayout>
            <main>
                <AppContent data={data} />
            </main>
        </SidebarLayout>
    );
}
