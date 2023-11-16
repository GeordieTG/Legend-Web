import LeaderboardVisual from "../components/LeaderboardVisual"
import Sidebar from "../components/Sidebar"

const Leaderboard = () => {
    return(
        <>
            <div className="flex bg-zinc-100">

                <Sidebar />

                <div className="p-16 w-full">
                        <h1>Leaderboard</h1>

                        <LeaderboardVisual />

                        <div className="space-y-3 mt-10">
                        </div>
                </div>
            </div>
        </>
    )
}

export default Leaderboard