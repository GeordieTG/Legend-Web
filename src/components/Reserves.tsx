import TeamRow from "./TeamRow";

const Reserves = () => {
    return (
        <div className="bg-white rounded-xl p-5 space-y-10">
            <p className="text-black font-bold text-xl">Interchange</p>

            <div className="flex">
                <div style={{border:"2px solid purple", width:"1px", height:"224px"}}></div>
                <div className="flex-grow">

                    <div className="p-4 w-full hover:bg-gray-200">
                        <div className="flex space-x-3">
                            <i className="bi bi-plus-lg"></i>
                            <p className="text-md">Add Player</p>
                        </div>
                    </div>
                    
                    <div className="p-4 hover:bg-gray-200">
                        <div className="flex space-x-3">
                            <i className="bi bi-plus-lg"></i>
                            <p className="text-md">Add Player</p>
                        </div>
                    </div>

                    <div className="p-4 hover:bg-gray-200">
                        <div className="flex space-x-3">
                            <i className="bi bi-plus-lg"></i>
                            <p className="text-md">Add Player</p>
                        </div>
                    </div>

                    <div className="p-4 hover:bg-gray-200">
                        <div className="flex space-x-3">
                            <i className="bi bi-plus-lg"></i>
                            <p className="text-md">Add Player</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <hr></hr>

            <p className="text-black font-bold text-xl">Emergency</p>
            <div className="flex">
            <div style={{border:"2px solid red", width:"1px", height:"224px"}}></div>
            <div className="flex-grow">

                    <div className="p-4 hover:bg-gray-200">
                        <div className="flex space-x-3">
                            <i className="bi bi-plus-lg"></i>
                            <p className="text-md">Add Player</p>
                        </div>
                    </div>
                    
                    <div className="p-4 hover:bg-gray-200">
                        <div className="flex space-x-3">
                            <i className="bi bi-plus-lg"></i>
                            <p className="text-md">Add Player</p>
                        </div>
                    </div>

                    <div className="p-4 hover:bg-gray-200">
                        <div className="flex space-x-3">
                            <i className="bi bi-plus-lg"></i>
                            <p className="text-md">Add Player</p>
                        </div>
                    </div>

                    <div className="p-4 hover:bg-gray-200">
                        <div className="flex space-x-3">
                            <i className="bi bi-plus-lg"></i>
                            <p className="text-md">Add Player</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Reserves