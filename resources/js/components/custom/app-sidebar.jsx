import { Earth } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenuBadge,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }) {
    return (
        <Sidebar collapsible="icon" className={"bg-amber-300"}>
            <SidebarHeader>
                <div className="flex justify-center">
                    <Earth className="size-12 stroke-emerald-700 text-emerald-700" />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup />
                {props.children}
            </SidebarContent>
            <SidebarFooter />
            <SidebarMenuBadge />
        </Sidebar>
    );
}
