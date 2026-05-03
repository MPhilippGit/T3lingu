import { ContentLayout } from "@/Layouts/ContentLayout";
import { Button } from "../ui/button";
import { FileCode, DownloadIcon } from "lucide-react";

export function AppContent({ data }) {
    return (
        <ContentLayout data={data}>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    <div className="aspect-video rounded-xl bg-emerald-700/30 grid content-center">
                        <div className="grid auto-rows-fr justify-center">
                            <div className="inline-flex items-center">
                                Download <FileCode />
                            </div>
                            <div className="inline-flex justify-center">
                                <Button>
                                    <DownloadIcon />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="aspect-video rounded-xl bg-emerald-700/30" />
                    <div className="aspect-video rounded-xl bg-emerald-700/30" />
                    <div className="aspect-video rounded-xl bg-emerald-700/30" />
                </div>
                <div className="flex-1 rounded-xl bg-emerald-700/30 aspect-video" />
            </div>
        </ContentLayout>
    );
}
