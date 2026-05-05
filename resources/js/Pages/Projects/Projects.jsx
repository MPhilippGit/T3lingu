import SidebarLayout from "@/Layouts/SidebarLayout";
import { ProjectsContentTable } from "@/app/ProjectsContent";

export default function Dashboard({ ...data }) {
    return (
        <SidebarLayout>
            <main>
                <ProjectsContentTable data={data} />
            </main>
        </SidebarLayout>
    );
}
