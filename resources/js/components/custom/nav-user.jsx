import { Button } from "@/components/ui/button";
import {
    SquareArrowUpRight
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage, AvatarGroup } from "../ui/avatar";
import { SidebarMenuButton } from "../ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavUser() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <AvatarGroup>
                    <SidebarMenuButton className="inline-flex justify-around items-center w-full mb-6">
                        <Avatar />
                        <SquareArrowUpRight />
                    </SidebarMenuButton>
                </AvatarGroup>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
