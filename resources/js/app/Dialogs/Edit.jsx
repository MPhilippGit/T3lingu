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
import { Pencil, FolderGit2, GitCompare } from "lucide-react";

export function Edit({ project }) {
    return (
        <Dialog>
            <DialogTrigger>
                <Pencil size={16} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Projektinformationen bearbeiten</DialogTitle>
                </DialogHeader>
                <FieldSet>
                    <FieldLegend hidden>Project</FieldLegend>
                    <Field>
                        <FieldLabel htmlFor="name" hidden>
                            Project name
                        </FieldLabel>
                        <Input
                            id="name"
                            autoComplete="off"
                            placeholder="Project name"
                        />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="name" hidden>
                            Typo3 Version
                        </FieldLabel>
                        <Input
                            id="name"
                            autoComplete="off"
                            placeholder="Typo3 Version"
                        />
                    </Field>
                    <Field orientation="horizontal">
                        <Button type="submit">Update</Button>
                        <Button variant="outline" type="button">
                            Cancel
                        </Button>
                    </Field>
                </FieldSet>
            </DialogContent>
        </Dialog>
    );
}
