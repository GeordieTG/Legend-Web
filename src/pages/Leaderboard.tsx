import LeaderboardVisual from "../components/LeaderboardVisual"
import LeaguePreview from "../components/LeaguePreview"
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
                            <LeaguePreview name="Geordie Gibson" location="Greymouth" currentMembers="4" maxMembers="16"/>
                            <LeaguePreview name="Lebron James" location="Christchurch" currentMembers="15" maxMembers="16"/>
                            <LeaguePreview name="Shaun Johnson" location="Hokitika" currentMembers="1" maxMembers="8"/>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Leaderboard