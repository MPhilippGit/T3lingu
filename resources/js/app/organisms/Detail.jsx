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

function ExtensionSelection({ extensions }) {
    console.log(extensions);
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

export default function DetailView({ data }) {
    return (
        <ContentLayout data={data}>
            {data.extensions.length ? (
                <section className="px-4 flex gap-4">
                    <h2 className="text-2xl">{data.project.name}</h2>
                    <ExtensionSelection extensions={data.extensions} />
                </section>
            ) : (
                <section className="px-4">
                    <h2 className="text-2xl">{data.project.name}</h2>
                    <EmptyExtensions />
                </section>
            )}
        </ContentLayout>
    );
}
