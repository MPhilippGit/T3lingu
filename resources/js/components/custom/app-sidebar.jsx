import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar({...props}) {

    return (
        <Sidebar>
            <SidebarHeader>
            </SidebarHeader>
            <SidebarContent>
                <div className="flex justify-between">
                    {props.headline}
                </div>
                <SidebarGroup />
                    {props.children}
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    );
}
