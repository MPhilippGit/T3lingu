import {
    Table,
    TableHeader,
    TableRow,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import EmptyExtensions from "../molecules/Dialogs/Empty";

function Head({ schema }) {
    const tablehead = schema.map((value, idx) => (
        <TableCell key={idx}>{value}</TableCell>
    ));
    return <>{tablehead}</>;
}

function Row({ ...cells }) {
    const entries = Object.values(cells).map((cell, idx) => {
        return <TableCell key={idx}>{cell}</TableCell>;
    });

    return <TableRow>{entries}</TableRow>;
}

export function LanguageTable({ data, schema }) {
    if (data === undefined) return <EmptyExtensions />;
    const tableContent = Object.values(data);
    const entries = tableContent.map((row, idx) => {
        const { id, source, language_id } = row;
        return <Row id={id} language_id={language_id} source={source} />;
    });

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <Head schema={schema} />
                </TableRow>
            </TableHeader>
            <TableBody>{entries}</TableBody>
        </Table>
    );
}
