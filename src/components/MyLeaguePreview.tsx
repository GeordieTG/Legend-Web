import { Link } from "react-router-dom"

const MyLeaguePreview = (props: any) => {
    return (
        <>
            <Link className="group flex flex-col bg-zinc-100 w-72 h-72 rounded-lg" to={"/league?id=" + props.league.id}>
                <div className="overflow-hidden">
                    <img className="w-full aspect-video object-cover rounded group-hover:scale-110 transition-all" src={props.league.image || "wcba.png"}></img>
                </div>

                <div className="p-3">
                    <p className="text-lg font-bold">{props.league.name}</p>
                    <p><i className="me-1 bi bi-geo-alt"></i>{props.league.city}</p>
                    <p><i className="me-1 bi bi-people-fill"></i>1/{props.league.size}</p>
                </div>
                
            </Link>

                
        </>
    )
}

export default MyLeaguePreview