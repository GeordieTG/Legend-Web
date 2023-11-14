import TeamRow from "./TeamRow";

const TeamComponent = () => {
    return (
        <div id="team" className="space-y-12">
                <TeamRow number={1}/>
                <TeamRow number={3}/>
                <TeamRow number={2}/>
                <TeamRow number={2}/>
                <TeamRow number={2}/>
                <TeamRow number={3}/>
        </div>
    )
}

export default TeamComponent