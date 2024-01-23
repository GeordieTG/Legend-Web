import React from "react";
import ChatComponent from "../../components/LeaguePage/Chat";
import Sidebar from "../../components/Sidebar";
import { LeagueType } from "../../graphql";
import { api } from "../../graphql/requester";

const Chat = () => {

    const [league, setLeague] = React.useState<LeagueType>();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id') as string;

    React.useEffect(() => {
        api.GetLeague( {id: id}).then((response) => setLeague(response.league))
    }, [])
    
    return (
        <>
            <div className="flex bg-white max-h-screen overflow-hidden">
                <Sidebar page="leagues"/>
                <div className="p-8 pb-8 flex flex-col w-full">

                    <div className="flex space-x-4 items-center">
                        <img src="defaultpfp.svg" className="h-8 w-8"></img>
                        <h1>Bishops</h1>
                        <div className="text-xs">
                            <p className="text-gray-500" >14 members</p>
                            <p className="text-gray-500">2 active now</p> 
                        </div>
                    </div>

                    {league && <ChatComponent room={league.name}/>}                    
                </div>
            </div>
        </>
    )
}

export default Chat;