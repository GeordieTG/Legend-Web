import TeamRow from "./TeamRow";

const Reserves = () => {
    return (
        <div className="bg-white rounded-xl p-5 space-y-10">
            <p className="text-black font-bold text-xl">Reserves</p>

            <TeamRow number={2}/>
            <TeamRow number={2}/>
            <hr></hr>
            <p className="text-black font-bold text-xl">Emergency</p>
            <TeamRow number={2}/>
            <TeamRow number={2}/>

        </div>
    )
}

export default Reserves