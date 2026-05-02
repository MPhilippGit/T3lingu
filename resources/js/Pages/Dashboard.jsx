import { AppSidebar } from "@/components/custom/app-sidebar";
import { LayersPlus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Dashboard({ ...props }) {
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
                        <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href="#">
                                Build Your Application
                            </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                        <div className="aspect-video rounded-xl bg-emerald-700/30 grid content-center">
                            <div className="grid auto-rows-fr">
                                <LayersPlus />
                                <Button className="inline-flex">
                                    <Plus />
                                </Button>
                            </div>
                        </div>
                        <div className="aspect-video rounded-xl bg-emerald-700/30" />
                        <div className="aspect-video rounded-xl bg-emerald-700/30" />
                        <div className="aspect-video rounded-xl bg-emerald-700/30" />
                    </div>
                    <div className="min-screen flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                    </div>
                    <div className="flex justify-between">
                        {props.headline}
                    </div>
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
