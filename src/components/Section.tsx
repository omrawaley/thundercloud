import { Typography } from "./Typography";
import { Button } from "./ui/button";

interface SectionProps {
    title: string,
    body: string,
    button: string,
}

function Section({title, body, button}: SectionProps) {
    return (
        <div className="flex flex-col bg-gradient-to-r from-red to-magenta rounded-2xl mt-10 p-20 items-center text-center whitespace-pre">
            <Typography variant="h1" className="font-brand text-white ml-2">{title}</Typography>
            <Typography variant="p" className="font-brand text-white mr-2">{body}</Typography>
            <Button variant="default" className="mt-10">{button}</Button>
        </div>
    )
}

export default Section;
