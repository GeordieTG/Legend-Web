import Sidebar from "../../components/Sidebar";
import TeamComponent from "../../components/Team";
import TeamMenu from "../../components/TeamMenu";
import Reserves from "../../components/Reserves";

const Team = () => {

    console.log("made it")

    return (
        <div className="bg-white w-full">

            <div className="flex w-full">

                <Sidebar />

                <div className="flex p-16 flex-col w-full">

                    <div>
                        <TeamMenu page="team" />
                    </div>

                    {/* <div className="border rounded-lg mt-5 justify-evenly flex">

                        <p>Salary Remaining: 10M</p>
                        <p>Team Value: 0M</p>

                    </div> */}
                    
                    <div className="flex items-center mt-5">
                        <div id="firstHalf" className="">
                            <TeamComponent />
                        </div>

                        <div id="secondHalf" className="ml-20 flex-grow items-center">
                            <Reserves />
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Team