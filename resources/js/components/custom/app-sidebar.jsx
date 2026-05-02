import { Earth } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenuBadge
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";

export function AppSidebar({...props}) {

    return (
        <Sidebar collapsible="icon">
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
            <NavUser className="self-end justify-end" />
        </Sidebar>
    );
}
