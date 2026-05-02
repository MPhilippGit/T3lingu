import { AppSidebar } from "@/components/custom/app-sidebar";
import { FileCode, DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbPage,
    BreadcrumbList,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AppBreadcrumb } from "@/components/custom/app-breadcrumb";

export default function Dashboard({ ...data }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-12 items-center gap-2 px-4 border-b">
                    <SidebarTrigger />
                </header>
                <main>
                    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                        <div className="flex items-center gap-2 px-4">
                            <AppBreadcrumb />
                        </div>
                    </header>
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
                    <div className="flex justify-between">This is me</div>
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
