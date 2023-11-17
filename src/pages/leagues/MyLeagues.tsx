import Sidebar from "../../components/Sidebar";
import LeaguesMenu from "../../components/LeaguesMenu";


const MyLeagues = () => {
    return (
        <div className="flex bg-zinc-100">
            <Sidebar />
            <div className="p-16 w-full">

                <LeaguesMenu page="leagues"/>

                {/*Users Leagues*/}
                <div className="space-y-3 mt-20">
                </div>

            </div>
        </div>
    )
}

export default MyLeagues