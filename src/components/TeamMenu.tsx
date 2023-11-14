import {Link} from "react-router-dom";

const TeamMenu = (props) => {
    return (
        <div className="flex justify-evenly">
            <Link to="/team" className={`menuItem ${props.page === "team" ? "underline" : ""}`} style={{color:"#213547"}}>Team</Link>
            <Link to="/team/trade" className={`menuItem ${props.page === "trade" ? "underline" : ""}`} style={{color:"#213547"}}>Trade</Link>
        </div>
    )
}

export default TeamMenu