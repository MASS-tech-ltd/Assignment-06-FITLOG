import Image from "next/image";
import FooterLogo from "@/assets/logo.png"

const Footer = () => {
    return (
        <div className="container mx-auto md:mt-9 lg:mt-12 mt-6">
            <div className="border border-[#1b1f28] bg-[#0f1115] flex flex-col md:flex-row justify-between py-7 px-12">
                <div className="flex justify-center">
                    <Image
                        src={FooterLogo}
                        alt="Logo"
                    />
                    <h2 className="font-oswald font-bold text-lg text-white ml-3">FITLOG</h2>
                </div>
                <p className="font-normal mt-3 md:mt-0 text-center text-xm text-[#8a92a0]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;
