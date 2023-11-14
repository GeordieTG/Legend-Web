import Sidebar from "../../components/Sidebar";
import LeaguesMenu from "../../components/LeaguesMenu";
import LeaguePreview from "../../components/LeaguePreview";
import SearchBar from "../../components/SearchBar";

const SearchLeagues = () => {
    return (
        <>
            <div className="flex bg-zinc-100">
                <Sidebar />
                <div className="p-16 w-full">

                    <LeaguesMenu page="search"/>

                    <div className="mt-12 flex justify-center">
                        <SearchBar />
                    </div>
                    
                    {/*Users Leagues*/}
                    <div className="space-y-3 mt-12">
                        <LeaguePreview name="John Paul II High School" location="Greymouth" currentMembers="4" maxMembers="16"/>
                        <LeaguePreview name="University of Canterbury" location="Christchurch" currentMembers="15" maxMembers="16"/>
                        <LeaguePreview name="West Coast Wounders" location="Hokitika" currentMembers="1" maxMembers="8"/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SearchLeagues