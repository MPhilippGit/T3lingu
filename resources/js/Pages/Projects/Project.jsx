import DetailView from "@/app/organisms/Detail";
import { ContentLayout } from "@/Layouts/ContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";

export default function Dashboard({ breadcrumb, project, extensions, schema }) {
    return (
        <SidebarLayout>
            <ContentLayout breadcrumb={breadcrumb}>
                <DetailView project={project} extensions={extensions} />
            </ContentLayout>
        </SidebarLayout>
    );
}
