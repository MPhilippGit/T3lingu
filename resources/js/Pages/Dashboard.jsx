import BasicLayout from "@/Layouts/Basic";
import SidebarLayout from "@/Layouts/SidebarLayout";
import { Main } from "@/app/organisms/Main";
import { Link, usePage } from "@inertiajs/react";

export default function Dashboard({ ...data }) {
    const { content } = usePage().props;
    console.log(data.content, "pageprop");
    console.log(content, "usepage");

    return (
        <BasicLayout>
            <h2>{data.user.name}</h2>
            <Link
                href={"?extensionId=1"}
                only={["content"]}
                className="text-2xl text-blue-700 cursor-pointer"
            >
                let me in
            </Link>
        </BasicLayout>
    );
}
