import Sidebar from "../../components/Sidebar"

const League = () => {
    return (
        <>

    <div className="flex bg-zinc-100">


        <Sidebar />
        <div className="p-8 w-full">

        {/*Banner Image*/}
        <div className="bg-indigo-500 rounded-t-xl p-10 h-40 w-full"></div>

        {/*User Details*/}
        <div className="border w-full justify-center items-center flex-col rounded-b-xl bg-white flex relative">

            <img
                className="rounded-3xl"
                style={{height:"15%", width:"15%", marginTop:"-5%"}}
                src="/defaultpfp.svg"
            />


            <div className="text-center p-5">
                <h2 style={{fontSize:"24px"}} className="raleway text-black">West Coast Wounders</h2>

                <div className="flex space-x-5 mt-4">
                    <p className="text-black"><i className="bi bi-geo-alt"></i> Greymouth, New Zealand</p>
                    <p className="text-black"><i className="bi bi-calendar"></i> Created October 2023</p>
                </div>
            </div>

            <button className="border-2 rounded-3xl font-bold raleway m-3 bg-white text-black px-3 py-1 absolute top-0 right-0">Edit League</button>

        </div>
    </div>

    </div>
    </>
        
    )
}

export default League