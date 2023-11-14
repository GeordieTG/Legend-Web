import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { api } from "../graphql/requester";
import Friend from "../components/Friend";
import LeagueCompIcon from "../components/LeagueCompIcon";
import { UserType } from "../graphql";

const Profile = () => {

    const [user, setUser] = useState<UserType>();

    React.useEffect(() => {
        api.GetUser().then((response) => {setUser(response.user)})
    }, []);
        
    return (
        <div className="flex bg-zinc-100">

            <Sidebar />

            <div className="p-8 w-full">

                {/*Banner Image*/}
                <div className="bg-indigo-500 rounded-t-xl p-10 h-40 w-full"></div>

                {/*User Details*/}
                <div className="border rounded-b-xl bg-white h-32 flex relative">
                    <img
                        className="rounded-3xl"
                        style={{width: "9rem", height: "9rem", marginTop:"-6%", marginLeft:"8%"}}
                        src="/defaultpfp.svg"
                    />
                    <div className="ml-5 mt-4">
                        <h2 style={{fontSize:"24px"}} className="raleway text-black">{user?.name}</h2>
                        <p className="text-gray-600">@{user?.username}</p>

                        <div className="flex space-x-5 mt-4">
                            <p className="text-black"><i className="bi bi-geo-alt"></i> New Zealand</p>
                            <p className="text-black"><i className="bi bi-calendar"></i> Joined October 2023</p>
                        </div>
                    </div>

                    <button className="border-2 rounded-3xl font-bold raleway m-3 bg-white text-black px-3 py-1 absolute top-0 right-0">Edit Profile</button>

                </div>

                {/*Main Content*/}
                <div className="grid grid-cols-3 gap-3 rounded p-4 w-full">

                    {/*Leagues/Competitions Half*/}
                    <div className="col-span-2 gap-3 grid grid-rows-2">

                        {/*Leagues*/}
                        <div className="rounded-md border bg-white p-3">
                            <p className="text-black font-bold">Leagues</p>
                            <div className="flex items-center gap-10 mt-3 h-3/4">
                                <LeagueCompIcon text="University of Canterbury" image="/uc.png"/>
                                <LeagueCompIcon text="West Coast Wounders" image="/bogan.jpeg"/>
                            </div>
                        </div>

                        {/*Competitions*/}
                        <div className="rounded-md bg-white border p-3">
                            <p className="text-black font-bold">All Competitions</p>
                            <div className="flex items-center gap-10 mt-3 h-3/4">
                                <LeagueCompIcon text="Canterbury Rugby League" image="/crl.webp"/>
                                <LeagueCompIcon text="West Coast Basketball" image="/wcba.png"/>
                            </div>
                        </div>

                    </div>

                    {/*Friends*/}
                    <div className="col-span-1 rounded bg-white border p-3">
                        <p className="text-black font-bold mb-3">Friends (10)</p>
                        <div className="space-y-3">
                            <Friend name="Aston Wilson" username="awilson05"/>
                            <Friend name="Mac Gibson" username="mac.gibson6"/>
                            <Friend name="Tom Barthelmeh" username="tombart"/>
                            <Friend name="Derek Chizuni" username="dchizuni"/>
                            <Friend name="Nathan Fronda" username="ncf68"/>
                            <Friend name="Toby Sexton" username="therealtobysexton"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile