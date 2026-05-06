import { Item, ItemContent, ItemActions } from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import { Hash, LinkIcon } from "lucide-react";

function CellLink({ children, href }) {
    return (
        <Item>
            <ItemContent>
                <ItemActions>
                    <a
                        href={href}
                        className="inline-flex items-center gap-2 cursor-pointer"
                    >
                        {children}
                        <LinkIcon size={14} />
                    </a>
                </ItemActions>
            </ItemContent>
        </Item>
    );
}

function CellIdentifier({ children }) {
    return (
        <div>
            <div className="inline-flex items-center gap-2">
                <Hash size={14} />
                {children}
            </div>
        </div>
    );
}

function CellMap({ variant, children, id }) {
    if (variant === "id") return <CellIdentifier>{children}</CellIdentifier>;

    if (variant === "name")
        return <CellLink href={"project/" + id}>{children}</CellLink>;

    return <>{String(children)}</>;
}

export default function Cell({ children, variant, id }) {
    return (
        <TableCell>
            <CellMap variant={variant} id={id}>
                {children}
            </CellMap>
        </TableCell>
    );
}
