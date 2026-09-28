import { workOutdatatype } from "../type";
import WorkoutCard from "./WorkoutCard";

const getWorkOutDatas = async (): Promise<workOutdatatype[]> => {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
    return res.json()
}

const WorkoutList = async () => {

    const workOutData = await getWorkOutDatas()

    return (
        <div id="library" className="container mx-auto px-4 md:px-6 lg:px-0 md:mt-16 mt-14">
            <h1 className="font-bold font-oswald text-4xl text-white">THE LIBRARY</h1>
            <p className="font-normal text-base text-gray-400 mt-2 mb-6">Twelve lifts covering every major muscle group.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 md:gap-4 lg:gap-6">
                {
                    workOutData.map((data: workOutdatatype) => <WorkoutCard
                        key={data.id} data={data}
                    ></WorkoutCard>)
                }
            </div>
        </div>
    );
};

export default WorkoutList;