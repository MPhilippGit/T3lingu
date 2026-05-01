export default function Dashboard({ ...props }) {
    console.log(props.name);

    return (
        <>
            <h2 className="text-2xl text-emerald-800">Hallo {props.name}</h2>
        </>
    );
}
