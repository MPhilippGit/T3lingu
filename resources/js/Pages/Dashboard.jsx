import SidebarLayout from "@/Layouts/SidebarLayout";
import { Main } from "@/app/organisms/Main";
import { Link, usePage } from "@inertiajs/react";

export default function Dashboard({ ...data }) {
    console.log(data);

    const { flash } = usePage();

    console.log(flash);

    return (
        <>
            <h2>Hallo, {data.name}</h2>
            <Link href="/flash">Flash</Link>
            {flash}
        </>
    );
}
