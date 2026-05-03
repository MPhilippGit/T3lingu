import { ContentLayout } from "@/Layouts/ContentLayout";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Link2 } from "lucide-react";
import { Extensions } from "./Partials/Extensions";
import { Button } from "@/components/ui/button";

export function ProjectsContent({ data }) {
    const projects = data.projects.map((project, idx) => {
        return (
            <AccordionItem key={idx} value={String(idx)}>
                <AccordionTrigger className="flex items-center justify-between">
                    <span>{project.name}</span>
                    <Button variant="ghost">
                        <a
                            href={`/projects/${project.id}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Link2 />
                        </a>
                    </Button>
                </AccordionTrigger>
                <AccordionContent>
                    <Extensions extensions={project.extensions} />
                </AccordionContent>
            </AccordionItem>
        );
    });

    return (
        <ContentLayout data={data}>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                    <div className="aspect-video rounded-xl bg-emerald-700/30 py-4 px-12">
                        <h2 className="text-2xl mb-4">Projekte</h2>
                        <Accordion type="single" collapsible>
                            {projects}
                        </Accordion>
                    </div>
                </div>
            </div>
        </ContentLayout>
    );
}
