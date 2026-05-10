import { Link } from "@inertiajs/react";

export default function BasicLayout({ children, ...data }) {
    return (
        <>
            <div className="flex gap-4 text-blue-900">
                <Link href={"/"}>Dashboards</Link>
                <Link href={"/projects"}>Projects</Link>
            </div>
            <div>{children}</div>
        </>
    );
}
