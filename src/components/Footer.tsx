import Image from "next/image";
import { GrPhone, GrMailOption, GrLocation } from "react-icons/gr";

function Footer() {
    return (
        <div className="bg-gradient-to-r from-red to-magenta mt-10 flex justify-between">
            <div className="flex place-items-center">
                <Image width={250} height={250} alt="logo" src="/ThunderCloudTransparent.png" />
                <p className="text-white font-brand">Copyright © ThunderCloud 2024 | All Rights Reserved</p>
            </div>
            <ul className="text-white font-brand flex gap-4 place-items-center mr-10">
                <li className="flex gap-2 place-items-center"><GrLocation /> 10301 Alpine Drive, Cupertino, CA.</li>
                <li className="flex gap-2 place-items-center"><GrPhone /> 408-962-3700</li>
                <li className="flex gap-2 place-items-center"><GrMailOption /> contact@thundercloud.com</li>
            </ul>
        </div>
    )
}

export default Footer;
