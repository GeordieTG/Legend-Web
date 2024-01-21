import Player from "./Player";

const TeamRow = (props: any) => {

    const pfpArray = Array.from({ length: props.number }, (_, index) => index);

    const positions = ["HOK", "MID", "MID", "MID", "EDG", "EDG", "HLF", "HLF", "CTR", "CTR", "WFB", "WFB", "WFB"]
    return (
        <div className="flex justify-center space-x-10">
            {pfpArray.map((index) => (
                <div className="bg-white p-4 border rounded-lg flex items-center space-x-3">
                    <i style={{fontSize:"25px"}} className="bi bi-plus-lg"></i>
                    <p>{props.label}</p>
                </div>
                
            ))}
        </div>
    )
}

export default TeamRow