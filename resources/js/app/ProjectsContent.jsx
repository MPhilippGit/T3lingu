import {
    Table,
    TableHeader,
    TableCaption,
    TableRow,
    TableBody,
    TableCell,
    TableHead,
} from "@/components/ui/table";
import { Pencil, SquareX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Edit } from "./Dialogs/Edit";
import { ContentLayout } from "@/Layouts/ContentLayout";
import { EditProject } from "./Dialogs/EditProject";
import { DeleteProject } from "./Dialogs/Delete";

export function ProjectsContentTable({ data }) {
    function ProjectTableHead({ schema }) {
        const tablehead = schema.map((value, idx) => (
            <TableCell key={idx}>{value}</TableCell>
        ));
        return <>{tablehead}</>;
    }

    function ProjectCells({ project }) {
        const projectCells = Object.values(project).map((value, idx) => {
            if (value instanceof Array)
                return <TableCell key={idx}></TableCell>;
            const content = String(value);
            return <TableCell key={idx}>{content}</TableCell>;
        });
        return <>{projectCells}</>;
    }

    function ProjectRows({ projects }) {
        const projectRows = projects.map((project, idx) => (
            <TableRow key={idx}>
                <ProjectCells project={project} />
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

    return (
        <ContentLayout data={data}>
            <Table>
                <TableCaption>List of Projects</TableCaption>
                <TableHeader>
                    <TableRow>
                        <ProjectTableHead schema={data.schema} />
                        <TableCell>Controls</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <ProjectRows projects={data.projects} />
                </TableBody>
            </Table>
        </ContentLayout>
    );
}
