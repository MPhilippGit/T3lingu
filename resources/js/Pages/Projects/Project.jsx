import Detail from "@/app/organisms/Detail";
import { ContentLayout } from "@/Layouts/ContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";

export default function Dashboard({ ...response }) {
    return (
        <SidebarLayout>
            <ContentLayout breadcrumb={response.breadcrumb}>
                <Detail
                    project={response.project}
                    extensions={response.extensions}
                    schema={response.schema}
                />
            </ContentLayout>
        </SidebarLayout>
    );
}
