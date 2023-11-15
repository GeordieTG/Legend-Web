import {Link} from "react-router-dom";

const LeaguesMenu = (props: any) => {
    return (
        <div className="flex justify-evenly">
            <Link to="/leagues" className={`menuItem ${props.page === "leagues" ? "underline" : ""}`} style={{color:"#213547"}}>My Leagues</Link>
            <Link to="/leagues/search" className={`menuItem ${props.page === "search" ? "underline" : ""}`} style={{color:"#213547"}}>Search Leagues</Link>
            <Link to="/leagues/create" className={`menuItem ${props.page === "create" ? "underline" : ""}`} style={{color:"#213547"}}>Create League</Link>
        </div>
    )
}

export default LeaguesMenu