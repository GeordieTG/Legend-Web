import Sidebar from "../../components/Sidebar";
import LeaguesMenu from "../../components/LeaguesMenu";
import { api } from "../../graphql/requester";
import React from 'react'
import { LeagueType } from "../../graphql";
import MyLeaguePreview from "../../components/MyLeaguePreview";

const MyLeagues = () => {

    const [leagues, setLeagues] = React.useState<Array<LeagueType>>([])
    
    React.useEffect(() => {
        const token = localStorage.getItem("user") as string
        api.GetUsersLeagues( {token: token} ).then((response: any) => {setLeagues(response.user.leagues)})
    }, [])
    
    const userLeagues = (): JSX.Element[] => {
        console.log(leagues)
        return leagues.map((league: any, index: any) => 
            <div key={index}>
                <MyLeaguePreview league={league}/>
            </div>
        )
    }

    return (
        <div className="flex bg-white">
            <Sidebar page="leagues"/>
            <div className="p-16 w-full">

                <LeaguesMenu page="leagues"/>

                {/*Users Leagues*/}
                <div className="mt-20">
                {leagues.length ? 
                    <div className="flex space-x-3 flex-wrap">
                        {userLeagues()}
                    </div> 
                    : 
                    <div>
                        <div className="text-center display-5"><i className="bi bi-emoji-frown-fill"></i></div> 
                        <div className="fs-5 text-center">Failed to fetch leagues</div>
                    </div>
                }
                </div>
                
            </div>
        </div>
    )
}

export default MyLeagues