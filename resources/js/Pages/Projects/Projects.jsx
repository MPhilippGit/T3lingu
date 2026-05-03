import SidebarLayout from "@/Layouts/SidebarLayout";
import { ProjectsContent } from "@/app/ProjectsContent";

export default function Dashboard({ ...data }) {
    return (
        <SidebarLayout>
            <main>
                <ProjectsContent data={data} />
            </main>
        </SidebarLayout>
    );
}
