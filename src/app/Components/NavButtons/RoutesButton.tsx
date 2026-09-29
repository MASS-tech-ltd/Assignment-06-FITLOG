"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";



const RoutesButton = () => {
    const pathname = usePathname();
    return (
        <>
            <li><Link
                href="/"
                className={pathname === "/" ? "text-[#c2f800] font-bold" : ""}
            >Workouts</Link></li>
            <li><Link
                href="/my-plan"
                className={pathname === "/my-plan" ? "text-[#c2f800] font-bold" : ""}
            >My Plan</Link></li>
        </>
    );
};

export default RoutesButton;