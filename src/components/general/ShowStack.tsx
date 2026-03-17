
interface ShowStackProps {
    name: string,
}

export function ShowStack({name}: ShowStackProps) {
    return (
        <div className="">
            <p>{name}</p>
        </div>
    );
}