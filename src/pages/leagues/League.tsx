import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar"
import React from 'react'
import { api } from "../../graphql/requester";
import Chat from "../../components/LeaguePage/Chat";
import Members from "../../components/LeaguePage/Members";
import { LeagueType } from "../../graphql";

const League = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id') as string;

    const [userLeagues, setUserLeagues] = React.useState<Array<LeagueType>>();
    const token: any = localStorage.getItem("user")
    const [league, setLeague] = React.useState<LeagueType>()
    const [tab, setTab] = React.useState<string>("draw")

    React.useEffect(() => {
        api.GetLeague( {id: id}).then((response) => setLeague(response.league))
        api.GetUsersLeagues({ token: token }).then((response: any) => {setUserLeagues(response.user.leagues)})
    }, [])

    const isLeagueMember = () => {
        return userLeagues?.some(leagueItem => leagueItem.id === league?.id)
    }

    return (
        <>
    <div className="flex bg-zinc-100">

        <Sidebar />
        <div className="p-8 w-full">

            {/*Banner Image*/}
            <div className="bg-indigo-500 rounded-t-xl p-10 h-40 w-full"></div>

            {/*User Details*/}
            <div className="border w-full justify-center items-center flex-col rounded-b-xl bg-white flex relative">

                <img
                    className="rounded-3xl"
                    style={{height:"15%", width:"15%", marginTop:"-5%"}}
                    src="/defaultpfp.svg"
                />


                <div className="text-center p-5">
                    <h2 style={{fontSize:"24px"}} className="raleway text-black">{league?.name}</h2>

                    <div className="flex space-x-5 mt-4">
                        <p className="text-black"><i className="bi bi-geo-alt"></i> {league?.city}</p>
                        <p className="text-black"><i className="bi bi-calendar"></i> Created October 2023</p>
                    </div>
                </div>

                <button className="border-2 rounded-3xl font-bold raleway m-3 bg-white text-black px-3 py-1 absolute top-0 right-0">{isLeagueMember() ? "Edit" : "Join"}</button>
            </div>

            {/*Nav*/}
            <div className="bg-white mt-2 rounded-xl py-2 px-3 flex gap-x-5">
                <button className="text-black" onClick={() => setTab("draw")}>Draw</button>
                <button className="text-black" onClick={() => setTab("members")}>Members</button>
                <button className="text-black" onClick={() => setTab("leaderboard")}>Leaderboard</button>
                <button className="text-black" onClick={() => setTab("chat")}>Chat</button>
            </div>

            {tab === "draw" && <h1>Draw</h1>}
            {tab === "members" && <Members league={league}/>}
            {tab === "leaderboard" && <h1>Leaderboard</h1>}
            {tab === "chat" && <Chat room={league?.name} />}

        </div>
    </div>
    </>
        
    )
}

export default League