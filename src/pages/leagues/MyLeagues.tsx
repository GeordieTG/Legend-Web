import Sidebar from "../../components/Sidebar";
import LeaguesMenu from "../../components/LeaguesMenu";
import { api } from "../../graphql/requester";
import React from 'react'
import { LeagueType } from "../../graphql";
import LeaguePreview from "../../components/LeaguePreview";

const MyLeagues = () => {

    const [leagues, setLeagues] = React.useState<Array<LeagueType>>([])
    
    React.useEffect(() => {
        const token = localStorage.getItem("user") as string
        api.GetUsersLeagues( {token: token} ).then((response: any) => {setLeagues(response.user.leagues)})
    }, [])
    
    const userLeagues = (): JSX.Element[] => {
        return leagues.map((league: any, index: any) => 
            <div key={index}>
                <LeaguePreview league={league}/>
            </div>
        )
    }


    return (
        <div className="flex bg-white">
            <Sidebar />
            <div className="p-16 w-full">

                <LeaguesMenu page="leagues"/>

                {/*Users Leagues*/}
                <div className="space-y-3 mt-20">
                {leagues.length ? <div className="d-flex flex-wrap justify-content-evenly">
                                {userLeagues()}
                            </div> : <div><div className="text-center display-5"><i className="bi bi-emoji-frown-fill"></i></div> <div className="fs-5 text-center"> No leagues meet the search criteria</div></div>}                </div>

            </div>
        </div>
    )
}

export default MyLeagues