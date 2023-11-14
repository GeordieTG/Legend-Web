import Button from "../../components/Button";

const LandingPage = () => {

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center h-screen w-screen">

            <div>
                <h1 className="text-7xl text-black text-center">legend.</h1>
                <p className="text-xl raleway mt-5 text-black text-center">turning fantasy into reality</p>

                {/*Login and Register Buttons*/}
                <div className="mt-16 flex gap-4">
                    <Button path={"/login"} text={"Login"}/>
                    <Button path={"/register"} text={"Register"}/>
                </div>
            </div>

        </div>
    )
}

export default LandingPage