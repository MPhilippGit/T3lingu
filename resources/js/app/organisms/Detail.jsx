import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectValue,
    SelectGroup,
    SelectItem,
} from "@/components/ui/select";
import { ContentLayout } from "@/Layouts/ContentLayout";
import EmptyExtensions from "../molecules/Dialogs/Empty";
import { LanguageTable } from "./IndexTable";

function ExtensionSelection({ extensions }) {
    const selectItems = extensions.map((item, idx) => {
        return (
            <SelectItem key={idx} value={item.id}>
                {item.name}
            </SelectItem>
        );
    });

    return (
        <Select>
            <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder={extensions[0].name} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Typo3 Extensions</SelectLabel>
                    {selectItems}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

export default function DetailView({ project, extensions }) {
    return (
        <>
            {extensions.length ? (
                <section className="px-4 gap-4">
                    <div className="flex space-x-4">
                        <h2 className="text-2xl">{project.name}</h2>
                        <ExtensionSelection extensions={extensions} />
                    </div>
                </section>
            ) : (
                <section className="px-4">
                    <h2 className="text-2xl">{project.name}</h2>
                    <EmptyExtensions />
                </section>
            )}
        </>
    );
}
