import Button from "../../components/Button";
import FormInput from "../../components/FormInput";

const Register = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">


            <div className={"rounded w-96 bg-white p-8"}>
                <h1 className={""}>Sign Up</h1>

                <div className="mt-5 flex flex-col space-y-4">

                    <FormInput type={"Email"}/>
                    <FormInput type={"Password"}/>

                    <Button text="Register" path='/profile'></Button>

                    <hr></hr>

                    <p className={"text-black"}>Sign up with:</p>
                    <div className="flex gap-10 justify-center" style={{fontSize: "25px"}}>
                        <button><i className="bi bi-google"></i></button>
                        <button><i className="bi bi-facebook"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register