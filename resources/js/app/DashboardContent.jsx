import { ContentLayout } from "@/Layouts/ContentLayout";
import { Button } from "@/components/ui/button";
import { FileCode, DownloadIcon } from "lucide-react";

export function DashboardContent({ data }) {
    const projects = data.projects.map((project, idx) => {
        return (
            <li key={idx}>
                <a href={`/projects/${project.id}`}>{project.name}</a>
            </li>
        );
    });

    return (
        <ContentLayout data={data}>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                    <div className="aspect-video rounded-xl bg-emerald-700/30 py-4 px-12">
                        <h2 className="text-2xl">Projekte</h2>
                        {projects}
                    </div>
                </div>
            </div>
        </ContentLayout>
    );
}
