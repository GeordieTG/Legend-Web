import Player from "./Player";

const TradeComponent = (props: any) => {
    return (
        <>
            <p className="text-black font-medium text-center">Trade {props.number}</p>
            <div className="flex items-center justify-between px-10">
                <Player />
                <p className="text-black"><i className="bi bi-arrow-left-right"></i></p>
                <Player />
            </div>
        </>

    )
}

export default TradeComponent