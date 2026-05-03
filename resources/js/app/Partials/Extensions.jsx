import { Button } from "@/components/ui/button";

export function Extensions({ extensions }) {
    const projectExtensions = extensions.map((extension, idx) => {
        return <Button key={idx}>{extension.name}</Button>;
    });

    return <>{projectExtensions}</>;
}
