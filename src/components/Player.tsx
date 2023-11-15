const Player = (props: any) => {
    return (
        <div className="flex flex-col items-center">

            <img
                className="rounded-full border"
                style={{width: "3rem", height: "3rem", objectFit: "cover"}}
                src={props.image || "/defaultpfp.svg"}
            />

            <p className={"text-black text-center"}>{props.text || "Geordie Gibson"}</p>

        </div>

    )
}

export default Player