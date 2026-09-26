import Image from "next/image";
import heroImg from "@/assets/banner.png"


const Banner = () => {
    return (
        <div className="px-4 md:px-6 lg:px-0 md:mt-9 lg:mt-12 mt-6">
            <div className=" bg-[#15171d] border-2 rounded-2xl border-[#222630] container mx-auto">
                <div className="flex-col md:flex lg:flex lg:justify-between md:justify-between md:flex-row-reverse lg:flex-row-reverse">
                    <div className=" lg:p-14 md:py-8 py-5 flex justify-center md:block md:justify-normal">
                        <Image
                            src={heroImg}
                            alt="Banner Photo"
                        />
                    </div>
                    <div className="py-7 px-6 lg:py-18 lg:pl-14 md:py-13 md:pl-8">
                        <h5 className="text-xm font-bold uppercase text-lime-400">WORKOUT LIBRARY</h5>
                        <h1 className="lg:py-5 py-2 lg:text-[60px] md:text-[40px] text-[30px] leading-none font-extrabold uppercase text-white font-oswald">TRAIN WITH INTENT. LOG <br />
                            EVERY SET.</h1>
                        <p className="lg:w-lg md:w-100 mb-5  font-normal lg:text-base md:text-base text-xm text-gray-400">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                            into today&apos;s plan, and watch the week&apos;s work add up.
                        </p>
                        <button className="btn btn-primary border-0 
                        text-xm font-bold uppercase text-black rounded-md bg-lime-400">BROWSE WORKOUTS</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;