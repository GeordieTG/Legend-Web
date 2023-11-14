import { Link } from "react-router-dom";
import DefaultImage from "./DefaultImage";

const LeaguePreview = (props: any) => {
    return (
        <div>
            <Link to="/league">
                <div className="w-full bg-white flex grid grid-cols-3 items-center p-5">
                    <div className="ml-20 flex items-center gap-5">
                        <DefaultImage />
                        <p className="text-black font-medium">{props.name}</p>
                    </div>
                    <p className="text-black text-center font-medium">{props.location}</p>
                    <p className="text-black text-center font-medium">{props.currentMembers} / {props.maxMembers}</p>
                </div>
            </Link> 
        </div>
               
    )
}

export default LeaguePreview