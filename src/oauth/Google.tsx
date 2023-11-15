import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const GoogleOAuth = () => {
    return (
        <GoogleOAuthProvider clientId="769128240212-4jgm5juo5n09grfu8cod4tle7p1996oo.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={credentialResponse => {
                const user = jwtDecode(credentialResponse.credential as string);
                console.log(user);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />;
          </GoogleOAuthProvider>
    )
}

export default GoogleOAuth