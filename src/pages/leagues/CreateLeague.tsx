import Sidebar from "../../components/Sidebar";
import LeaguesMenu from "../../components/LeaguesMenu";
import FormInput from "../../components/FormInput";

const CreateLeague = () => {
    return (
        <>
            <div className="flex bg-zinc-100">
                <Sidebar />
                <div className="p-16 w-full">

                    <LeaguesMenu page="create"/>

                    <div className="bg-white rounded mt-20 p-10 flex flex-col gap-5">

                        <FormInput label="Name" placeholder={"Name"} type={"text"}/>

                        <FormInput label="Location" placeholder={"Location"} type={"text"}/>

                        <FormInput label={"League Size"} placeholder={"League Size"} type={"text"}/>

                        <button className="button">Create</button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default CreateLeague