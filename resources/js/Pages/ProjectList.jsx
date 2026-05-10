import BasicLayout from "@/Layouts/Basic";

export default function ProjectList({ ...data }) {
    const projects = data.projects.map((entry, idx) => {
        const { id, name } = entry;
        const projectLink = "/project/" + id;

        return (
            <li key={idx}>
                <a href={projectLink}>{name}</a>
            </li>
        );
    });
    return (
        <BasicLayout>
            <h2>Projects</h2>
            <ul>{projects}</ul>
        </BasicLayout>
    );
}
