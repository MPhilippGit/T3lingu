import SidebarLayout from "@/Layouts/SidebarLayout";
import { Main } from "@/app/organisms/Main";

export default function Dashboard({ ...data }) {
    return (
        <SidebarLayout>
            <Main data={data} />
        </SidebarLayout>
    );
}
