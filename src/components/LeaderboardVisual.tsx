import DefaultImage from "./DefaultImage"

const LeaderboardVisual = () => {
    return(
        <>
            <div className="flex justify-center items-end space-x-10 mt-10">
                <div className="flex flex-col items-center space-y-2">
                    <DefaultImage />
                    <div className="rounded-md" style={{height:"75px", width:"60px", backgroundColor:"blue"}}></div>
                    <p className="font-bold">2nd</p>
                </div>
                
                <div className="flex justify-end flex-col items-center space-y-2">
                    <DefaultImage />
                    <div className="rounded-lg" style={{height:"100px", width:"60px", backgroundColor:"red"}}></div>
                    <p className="font-bold">1st</p>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <DefaultImage />
                    <div className="rounded-lg" style={{height:"50px", width:"60px", backgroundColor:"green"}}></div>
                    <p className="font-bold">3rd</p>
                </div>
            </div>
        </>
    )
}

export default LeaderboardVisual