import {
    Table,
    TableHeader,
    TableCaption,
    TableRow,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import Cell from "@/app/atoms/Cell";
import { Pencil } from "lucide-react";
import { ContentLayout } from "@/Layouts/ContentLayout";
import { EditProject } from "../molecules/Dialogs/EditProject";
import { DeleteProject } from "../molecules/Dialogs/Delete";

function ProjectTableHead({ schema }) {
    const tablehead = schema.map((value, idx) => (
        <TableCell key={idx}>{value}</TableCell>
    ));
    return <>{tablehead}</>;
}

function ProjectCells({ project, schema }) {
    const projectCells = Object.values(project).map((value, idx) => {
        const content = String(value);
        return (
            <Cell key={idx} variant={schema[idx]} id={project["id"]}>
                {content}
            </Cell>
        );
    });
    return <>{projectCells}</>;
}

function ProjectRows({ projects, schema }) {
    const projectRows = projects.map((project, idx) => (
        <TableRow key={idx}>
            <ProjectCells project={project} schema={schema} />
            <TableCell>
                <div className="flex gap-4 text-black/70">
                    <EditProject>
                        <Pencil size={16} />
                    </EditProject>
                    <DeleteProject />
                </div>
            </TableCell>
        </TableRow>
    ));

    return <>{projectRows}</>;
}

export function ProjectTable({ projects, schema }) {
    return (
        <Table>
            <TableCaption>List of Projects</TableCaption>
            <TableHeader>
                <TableRow>
                    <ProjectTableHead schema={schema} />
                </TableRow>
            </TableHeader>
            <TableBody>
                <ProjectRows projects={projects} schema={schema} />
            </TableBody>
        </Table>
    );
}
