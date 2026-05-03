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

export function ProjectsContentTable({ data }) {
    function ProjectTableHead({ projects }) {
        const projectHeader = projects.map((project, idx) => (
            <TableHead key={idx}>{Object.keys(project)[idx]}</TableHead>
        ));
        return <>{projectHeader}</>;
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
                        <Button variant="outline">
                            <Pencil />
                        </Button>
                        <Button variant="outline">
                            <SquareX size={16} />
                        </Button>
                        <Edit />
                    </div>
                </TableCell>
            </TableRow>
        ));

        return <>{projectRows}</>;
    }

    return (
        <Table className={"bg-emerald-900/30"}>
            <TableCaption>List of Projects</TableCaption>
            <TableHeader>
                <TableRow>
                    <ProjectTableHead projects={data.projects} />
                    <TableCell>Controls</TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                <ProjectRows projects={data.projects} />
            </TableBody>
        </Table>
    );
}
