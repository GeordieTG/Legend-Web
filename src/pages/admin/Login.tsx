import Button from '../../components/Button';
import GoogleOAuth from '../../oauth/Google';

const Login = () => {

  return (

    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center h-screen w-screen">
      <div className="rounded w-96 bg-white p-8">

        <h1>Login to Legend</h1>

          <div className="p-8 flex justify-center">
            <div>
              <GoogleOAuth />
              <GoogleOAuth />

              <Button class="arrowbutton" text="Login" path="/profile" />
            </div>

          </div>

      </div>
    </div>
  );
};

export default Login;
