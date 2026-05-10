import { Link } from "@inertiajs/react";
import BasicLayout from "@/Layouts/Basic";

export default function ProjectDetail({ ...data }) {
    const { name } = data.project;
    console.log(data.files, "pageprop");

    const extensions = data.extensions.map((entry, idx) => {
        const { id, name } = entry;
        const extensionLink = "?extension=" + id;

        return (
            <li key={idx}>
                <Link href={extensionLink} only={["files"]}>
                    {name}
                </Link>
            </li>
        );
    });

    return (
        <BasicLayout>
            <h2 className="flex my-4">{name}</h2>
            <ul className="flex my-4">{extensions}</ul>
            <table>
                <tbody className="m-4">
                    <tr>
                        <th>Source Locale</th>
                        <th>Unit Id</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                </tbody>
            </table>
        </BasicLayout>
    );
}
