import Sidebar from "../../components/Sidebar";
import LeaguesMenu from "../../components/LeaguesMenu";
import FormInput from "../../components/FormInput";
import { api } from "../../graphql/requester";
import React from 'react'
import { useNavigate } from "react-router-dom";

const CreateLeague = () => {

    const [name, setName] = React.useState<string>("")
    const [city, setCity] = React.useState<string>("")
    const [size, setSize] = React.useState<number>(0)
    const navigator = useNavigate()

    const createLeague = async () => {
        const token = localStorage.getItem("user") as string
        const response = await api.GetUser( {token: token})
        api.CreateLeague({ name: name, city: city, size: size, owner_id: response.user.email })
        navigator('/leagues')
    }

    return (
        <>
            <div className="flex bg-white">
                <Sidebar />
                <div className="p-16 w-full">

                    <LeaguesMenu page="create"/>

                    <div className="bg-white rounded mt-20 p-10 flex flex-col gap-5">

                        <FormInput onChange={(e: any) => setName(e.target.value)} label="Name" placeholder={"Name"} type={"text"}/>

                        <FormInput onChange={(e: any) => setCity(e.target.value)} label="City" placeholder={"City"} type={"text"}/>

                        <FormInput onChange={(e: any) => setSize(parseInt(e.target.value))} label={"League Size"} placeholder={"League Size"} type={"text"}/>

                        <button onClick={() => createLeague()} className="button">Create</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateLeague