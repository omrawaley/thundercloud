import Image from "next/image";
import { Typography } from "./Typography";
import { Button } from "./ui/button";

function Navbar() {
    return (
        <div className="flex justify-between bg-gradient-to-r from-red/80 to-magenta/80 backdrop-filter backdrop-blur-md rounded-b-2xl fixed left-0 right-0 top-0 z-50">
            <div className="flex gap-5 place-items-center">
            <Typography variant="h1" className="italic text-white ml-2">ThunderCloud</Typography>
            <Image src="/CloudImage.png" width={80} height={80} alt="cloud" />
            </div>
            <ul className="flex text-white font-brand place-items-center gap-4 mr-2">
                <li><Button variant="ghost">Home</Button></li>
                <li><Button variant="ghost">About</Button></li>
                <li><Button variant="ghost">Pricing</Button></li>
                <li><Button variant="ghost">Partners</Button></li>
                <li><Button variant="ghost">Legal</Button></li>
                <Button variant="default">Join</Button>
            </ul>
        </div>
    )
}

export default Navbar
