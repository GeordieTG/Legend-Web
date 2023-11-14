import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div style={{minWidth: "15rem", maxWidth:"15rem"}} className="raleway bg-black p-10 h-screen">

            <h1 className="mt-5 text-white">legend.</h1>

            <div className="mt-20 flex flex-col gap-10">

                <div className="flex space-x-4">
                    <p><i className="sidebarText bi bi-dribbble"></i></p>
                    <Link to="/team">Team</Link>
                </div>

                <div className="flex space-x-4">
                    <p><i className="sidebarText bi bi-trophy"></i> </p>
                    <Link to="/leagues">Leagues</Link>
                </div>

                <div className="flex space-x-4">
                    <p><i className="sidebarText bi bi-trophy"></i> </p>
                    <Link to="/leaderboard">Leaderboard</Link>
                </div>

                <div className="flex space-x-4">
                    <p><i className="sidebarText bi bi-bar-chart"></i></p>
                    <Link to="/statistics">Statistics</Link>
                </div>

            </div>

            <div className="fixed bottom-5 left-5">

                <div className="flex space-x-2 items-center">
                    <img
                        className="rounded-3xl border"
                        style={{width: "2rem", height: "2rem"}}
                        src="/defaultpfp.svg"
                    />
                    <div>
                        <Link to="/profile">Geordie Gibson</Link>
                        <p className="sidebarText">CRL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
