import { Typography } from "./Typography";
import { Button } from "./ui/button";

function Navbar() {
    return (
        <div className="flex justify-between bg-gradient-to-r from-red to-magenta rounded-b-2xl p-2">
            <Typography variant="h1" className="italic text-white ml-2">ThunderCloud</Typography>
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

export default Navbar;
