import Image from "next/image";
import Logo from "@/assets/logo.png"
import Link from "next/link";
import PlanButton from "./NavButtons/PlanButton";
import SavedButton from "./NavButtons/SavedButton";
import RoutesButton from "./NavButtons/RoutesButton";



const Navbar = () => {

    return (
        <div className="bg-[rgba(12,13,16,0.95)] sticky top-0 z-50">
            <div className="navbar shadow-sm container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-[#1C1F27] rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {<RoutesButton></RoutesButton>}
                        </ul>
                    </div>
                    <Link href="/">
                        <div className="flex">
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={28}
                                height={28}
                            />
                            <h1 className="font-bold text-xl font-oswald ml-3">FITLOG</h1>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {<RoutesButton></RoutesButton>}
                    </ul>
                </div>


                <div className="flex md:gap-2 gap-1 mr-2 md:mr-5 lg:mr-0 navbar-end">
                    <Link href="/my-plan">
                        <PlanButton></PlanButton>
                    </Link>

                    <Link href="/my-plan">
                        <SavedButton></SavedButton>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;