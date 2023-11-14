import Sidebar from "../../components/Sidebar";
import TeamComponent from "../../components/Team";
import TeamRow from "../../components/TeamRow";
import TeamMenu from "../../components/TeamMenu";
import Reserves from "../../components/Reserves";

const Team = () => {

    console.log("made it")

    return (
        <div className="bg-zinc-100 w-full">

            <div className="flex w-full">

                <Sidebar />


                <div className="flex p-16 flex-col w-full">

                    <div>
                        <TeamMenu page="team" />
                    </div>

                    <div className="flex">
                        <div id="firstHalf" className="flex-auto p-10">
                            <TeamComponent />
                        </div>

                        <div id="secondHalf" className="flex-1 p-14">
                            <Reserves />
                        </div>
                    </div>


                </div>






            </div>

        </div>
    )
}

export default Team