import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

const Login = () => {

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center h-screen w-screen">
      <div className="rounded w-96 bg-white p-8">
        <h1>Login to Legend</h1>
        <div className="mt-5 flex flex-col space-y-4">
          <FormInput label="Email" placeholder="Email" type="text" />
          <FormInput label="Password" placeholder="Password" type="password" />
          <Button class="arrowbutton" text="Login" path="/profile" />
          <hr />
          <p className="text-black">Login with:</p>
          <div className="flex gap-10 justify-center" style={{ fontSize: '25px' }}>
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
            <button>
              <i className="bi bi-facebook"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;