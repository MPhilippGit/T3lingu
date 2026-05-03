import SidebarLayout from "@/Layouts/SidebarLayout";
import { ProjectsContentTable } from "@/app/ProjectsContent";

export default function Dashboard({ ...data }) {
    return (
        <SidebarLayout>
            <main>
                <div className="grid auto-cols-min md:grid-cols-3">
                    <ProjectsContentTable data={data} />
                </div>
            </main>
        </SidebarLayout>
    );
}
