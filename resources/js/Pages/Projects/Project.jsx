import DetailView from "@/app/organisms/Detail";
import SidebarLayout from "@/Layouts/SidebarLayout";

export default function Dashboard({ ...data }) {
    return (
        <SidebarLayout>
            <DetailView data={data} />
        </SidebarLayout>
    );
}
