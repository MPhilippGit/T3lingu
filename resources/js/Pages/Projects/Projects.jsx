import SidebarLayout from "@/Layouts/SidebarLayout";
import { ProjectTable } from "@/app/organisms/Index";

export default function Dashboard({ ...data }) {
    return (
        <SidebarLayout>
            <ProjectTable data={data} />
        </SidebarLayout>
    );
}
