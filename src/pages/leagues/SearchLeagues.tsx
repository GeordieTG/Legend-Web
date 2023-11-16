import Sidebar from "../../components/Sidebar";
import LeaguesMenu from "../../components/LeaguesMenu";
import LeaguePreview from "../../components/LeaguePreview";
import SearchBar from "../../components/SearchBar";
import { api } from "../../graphql/requester";
import React, { useState } from 'react'
import { LeagueType } from "../../graphql";

const SearchLeagues = () => {

    const [leagues, setLeagues] = useState<Array<LeagueType>>([]);

    React.useEffect(() => {
        api.GetLeagues().then((response: any) => {setLeagues(response.leagues)})
    }, [])

    const leaguePreviews = () => {
        return leagues.map((league: any, index: any) =>
            <div>
                <LeaguePreview key={index} league={league}/>
            </div>
        )
    }

    return (
        <>
            <div className="flex bg-zinc-100">
                <Sidebar />
                <div className="p-16 w-full">

                    <LeaguesMenu page="search"/>

                    <div className="mt-12 flex justify-center">
                        <SearchBar />
                    </div>
                    
                    <div className="space-y-3 mt-12">
                        <div className="container mt-4">
                            {leagues.length ? <div className="d-flex flex-wrap justify-content-evenly">
                                {leaguePreviews()}
                            </div> : <div><div className="text-center display-5"><i className="bi bi-emoji-frown-fill"></i></div> <div className="fs-5 text-center"> No leagues meet the search criteria</div></div>}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SearchLeagues