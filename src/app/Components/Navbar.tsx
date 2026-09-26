import Image from "next/image";
import Logo from "@/assets/logo.png"
import Link from "next/link";


const Navbar = () => {

    const link = <>
        <li><Link href="/">Workouts</Link></li>
        <li><Link href="/my-plan">My Plan</Link></li>
    </>

    return (
        <div className="bg-[rgba(12,13,16,0.95)]">
            <div className="navbar shadow-sm container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={28}
                        height={28}
                    />
                    <a className="btn btn-ghost text-xl font-oswald">FITLOG</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>


                <div className="flex md:gap-2 gap-1 mr-2 md:mr-5 lg:mr-0 navbar-end">
                    <button className="py-1.5 px-2 rounded-md md:py-1.5 md:px-4 md:rounded-lg bg-base-300 text-gray-300  flex items-center md:gap-2 hover:bg-base-200 hover:text-white active:scale-96 transition duration-200">
                        <span className="font-medium text-sm md:text-base mr-1 md:mr-0">Plan</span>
                        <span className="w-5 h-5 md:h-6.5 md:w-6.5 text-sm md:text-base rounded-full bg-[#c2f800] text-black font-bold flex items-center justify-center ">
                            0
                        </span>
                    </button>

                    <button className="py-1.5 px-2 rounded-md md:py-1.5 md:px-3 md:rounded-lg bg-base-300 text-gray-300 flex items-center gap-2 hover:bg-base-200 hover:text-white active:scale-96 transition duration-200">
                        <span className="font-medium text-sm md:text-base mr-1 md:mr-0">Saved</span>
                        <span className="w-5 h-5 md:h-6.5 md:w-6.5 text-sm md:text-base rounded-full border md:border-2 border-gray-500 flex items-center justify-center font-bold">
                            0
                        </span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;