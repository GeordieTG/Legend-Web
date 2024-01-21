import { Link } from "react-router-dom";
import League from "../pages/leagues/League";
import DefaultImage from "./DefaultImage";

const LeaguePreview = (props: any) => {
    return (
        <div>
            <Link to={"/league?id=" + props.league.id}>
                
                <div className="w-full bg-white flex grid grid-cols-3 items-center p-5">
                    <div className="ml-20 flex items-center gap-5">
                        <DefaultImage />
                        <p className="text-black font-medium">{props.league.name}</p>
                    </div>
                    <p className="text-black text-center font-medium">{props.league.city}</p>
                    <p className="text-black text-center font-medium">{1} / {props.league.size}</p>
                </div>
            </Link> 
        </div>
    )
}

export default LeaguePreview