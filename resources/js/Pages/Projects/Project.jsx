import Detail from "@/app/organisms/Detail";
import { ContentLayout } from "@/Layouts/ContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";

export default function Dashboard({ breadcrumb, project, extensions, schema }) {
    return (
        <SidebarLayout>
            <ContentLayout breadcrumb={breadcrumb}>
                <Detail
                    project={project}
                    extensions={extensions}
                    schema={schema}
                />
            </ContentLayout>
        </SidebarLayout>
    );
}
