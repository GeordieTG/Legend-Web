import Player from "./Player";

const TeamRow = (props) => {

    const pfpArray = Array.from({ length: props.number }, (_, index) => index);

    return (
        <div className="flex justify-around">
            {pfpArray.map((index) => (
                <Player key={index} />
            ))}
        </div>
    )
}

export default TeamRow