import Image from "next/image";
import { Typography } from "./Typography";
import { Button } from "./ui/button";

interface SectionProps {
    title: string,
    body: string,
    button: string,
    image: string,
    dir: 'left' | 'right',
}

function Section({title, body, button, image, dir}: SectionProps) {
    return (
        <div className={`flex justify-evenly bg-gradient-to-r from-red to-magenta rounded-2xl mt-10 p-20 items-center text-center whitespace-pre-line ${dir === 'left' ? "flex-row-reverse" : "flex-row"}`}>
            <div className="max-w-screen-sm">
                <Typography variant="h1" className="font-brand text-white ml-2">{title}</Typography>
                <Typography variant="p" className="font-brand text-white mr-2">{body}</Typography>
                <Button variant="default" className="mt-10">{button}</Button>
            </div>
            <Image src={image} width={400} height={400} alt="image" className=""/>
        </div>
    )
}

export default Section;
