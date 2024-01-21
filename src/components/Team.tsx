import TeamRow from "./TeamRow";

const TeamComponent = () => {
    return (
        <>
        <div className="flex justify-center items-center" style={{ position: "relative" }}>
            <img className="" src="team-field.png" style={{height:"10%"}} />

            <div id="team" className="space-y-4 flex-col flex justify-center" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
                <TeamRow number={1} label={"HOK"}/>
                <TeamRow number={3} label={"MID"}/>
                <TeamRow number={2} label={"EDG"}/>
                <TeamRow number={2} label={"HLF"}/>
                <TeamRow number={2} label={"CTR"}/>
                <TeamRow number={3} label={"WFB"}/>
            </div>
        </div>

        </>
        
    )
}

export default TeamComponent