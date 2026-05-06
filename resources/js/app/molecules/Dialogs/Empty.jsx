import {
    Empty,
    EmptyContent,
    EmptyHeader,
    EmptyDescription,
    EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

export default function EmptyExtensions() {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyTitle>No data</EmptyTitle>
                <EmptyDescription>No data found</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <Button>Add data</Button>
            </EmptyContent>
        </Empty>
    );
}
