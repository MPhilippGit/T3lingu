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
import { useState } from "react";
import { Link } from "@inertiajs/react";

function ExtensionSelection({ extensions, selectedExt, setExt }) {
    const selectItems = extensions.map((item, idx) => {
        return (
            <SelectItem key={idx} value={item.id}>
                {item.name}
            </SelectItem>
        );
    });

    return (
        <Select onValueChange={(e) => setExt(e - 1)}>
            <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder={extensions[selectedExt].name} />
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

function FileSelection({ files, selectedFile }) {
    if (files.length === 0) return <EmptyExtensions />;
    console.log(files[selectedFile].filename);

    const selectItems = files.map((item, idx) => {
        return (
            <SelectItem key={idx} value={item.id}>
                {item.filename}
            </SelectItem>
        );
    });

    return (
        <Select onValueChange={(e) => setFile(e - 1)}>
            <SelectTrigger className="w-full max-w-48">
                <SelectValue value={selectedFile} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Language Files</SelectLabel>
                    {selectItems}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

export default function Detail({ project, extensions, schema }) {
    const [selectedExt, setExt] = useState(0);
    const [selectedFile, setFile] = useState(0);

    return (
        <>
            {extensions.length ? (
                <section className="px-4 gap-4">
                    <div className="flex space-x-4">
                        <h2 className="text-2xl">{project.name}</h2>
                        <ExtensionSelection
                            setExt={setExt}
                            selectedExt={selectedExt}
                            extensions={extensions}
                        />
                        {extensions[selectedExt].xlfFiles && (
                            <FileSelection
                                selectedExt={selectedExt}
                                selectedFile={selectedFile}
                                setFile={setFile}
                                files={extensions[selectedExt].xlfFiles}
                            />
                        )}
                    </div>
                </section>
            ) : (
                <section className="px-4">
                    <h2 className="text-2xl">{project.name}</h2>
                    <EmptyExtensions files={extensions.xlfFiles} />
                </section>
            )}
        </>
    );
}
