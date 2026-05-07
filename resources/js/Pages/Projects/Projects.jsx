import { ContentLayout } from "@/Layouts/ContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import { ProjectTable } from "@/app/organisms/Index";

export default function Dashboard({ projects, schema, breadcrumb }) {
    return (
        <SidebarLayout>
            <ContentLayout breadcrumb={breadcrumb}>
                {projects && (
                    <ProjectTable projects={projects} schema={schema} />
                )}
            </ContentLayout>
        </SidebarLayout>
    );
}
