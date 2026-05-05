import {
    Field,
    FieldLegend,
    FieldSet,
    FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogHeader,
} from "@/components/ui/dialog";
import { SquareX } from "lucide-react";

export function DeleteProject({ project }) {
    return (
        <Dialog>
            <DialogTrigger>
                <SquareX size={16} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Projekt wirklich löschen?</DialogTitle>
                </DialogHeader>
                <FieldSet>
                    <Field orientation="horizontal">
                        <Button type="submit">Löschen</Button>
                        <Button variant="outline" type="button">
                            Cancel
                        </Button>
                    </Field>
                </FieldSet>
            </DialogContent>
        </Dialog>
    );
}
