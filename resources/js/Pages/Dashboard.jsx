import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/ui/sidebar";

export default function Dashboard({ ...props }) {
    console.log(props.name);

    return (
        <>
            <Sidebar>
                <h2 className="text-2xl text-emerald-800">
                    Hallo {props.name}
                </h2>
                <Button>Text</Button>
            </Sidebar>
        </>
    );
}
