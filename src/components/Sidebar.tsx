import {Link} from "react-router-dom";

const Sidebar = (props: any) => {

    console.log(props.page)
    return (
        <div style={{minWidth: "15rem", maxWidth:"15rem"}} className="raleway p-3 border bg-zinc-50 h-screen">

            <h1 className="px-2 mt-10">legend.</h1>

            <div className="mt-16 flex flex-col gap-1">
                <div className={`${props.page === "team" ? "bg-black" : "hover:bg-gray-200"} flex space-x-4 rounded-lg p-2`}>
                    <p><i className={`${props.page === "team" ? "text-white" : ""} bi bi-dribbble`}></i></p>
                    <Link className={`${props.page !== "team" ? "text-black" : ""}`} to="/team">Team</Link>
                </div>

                <div className={`${props.page === "leagues" ? "bg-black" : "hover:bg-gray-200"} flex space-x-4 rounded-lg p-2`}>
                    <p><i className={`${props.page === "leagues" ? "text-white" : ""} bi bi-trophy`}></i></p>
                    <Link className={`${props.page !== "leagues" ? "text-black" : ""}`} to="/leagues">Leagues</Link>
                </div>

                <div className={`${props.page === "leaderboard" ? "bg-black" : "hover:bg-gray-200"} flex space-x-4 rounded-lg p-2`}>
                    <p><i className={`${props.page === "leaderboard" ? "text-white" : ""} bi bi-trophy`}></i></p>
                    <Link className={`${props.page !== "leaderboard" ? "text-black" : ""}`} to="/leaderboard">Leaderboard</Link>
                </div>

                <div className={`${props.page === "statistics" ? "bg-black" : "hover:bg-gray-200"} flex space-x-4 rounded-lg p-2`}>
                    <p><i className={`${props.page === "statistics" ? "text-white" : ""} bi bi-bar-chart`}></i></p>
                    <Link className={`${props.page !== "statistics" ? "text-black" : ""}`} to="/statistics">Statistics</Link>
                </div>
            </div>

            <hr className="my-5"></hr>

            <div>
                <h2 className="mb-5 text-gray-600">My Leagues</h2>
                <div className="flex space-x-4 rounded-lg p-2 hover:bg-gray-200">
                    <Link className="text-black" to="/statistics">Bishops</Link>
                </div>
                <div className="flex space-x-4 rounded-lg p-2 hover:bg-gray-200">
                    <Link className="text-black" to="/statistics">UC</Link>
                </div>
            </div>
            <div className="fixed bottom-5">

                <div className="flex space-x-2 items-center rounded px-2 hover:bg-gray-200">
                    <img
                        className="rounded-3xl border"
                        style={{width: "2rem", height: "2rem"}}
                        src="/defaultpfp.svg"
                    />
                    <div>
                        <Link className="text-black" to="/profile">Geordie Gibson</Link>
                        <p className="text-gray-500">CRL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
