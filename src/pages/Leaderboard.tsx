import MyDrawer from "../components/Drawer"
import LeaderboardVisual from "../components/LeaderboardVisual"
import Sidebar from "../components/Sidebar"
import { motion } from "framer-motion"

const Leaderboard = () => {
    return(
        <>
            <div className="flex bg-white">

                <Sidebar page="leaderboard"/>

                <div className="p-16 w-full">
                        <h1>Leaderboard</h1>

                        <LeaderboardVisual />

                        <div className="space-y-3 mt-10">
                        </div>

                            <MyDrawer />

                </div>
            </div>
        </>
    )
}

export default Leaderboard