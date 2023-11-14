const LeagueCompIcon = (props) => {
    return (
        <div className="flex flex-col items-center">

            <img
                className="rounded-full border"
                style={{width: "5rem", height: "5rem", objectFit: "cover"}}
                src={props.image || "/defaultpfp.svg"}
            />

            <small className={"mt-2 text-black font-medium text-center"}>{props.text || "Geordie Gibson"}</small>

        </div>

    )
}

export default LeagueCompIcon