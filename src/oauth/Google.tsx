import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { api } from '../graphql/requester';
import User from '../types/User';

const GoogleOAuth = () => {

    const navigator = useNavigate();

    return (
        <GoogleOAuthProvider clientId="769128240212-4jgm5juo5n09grfu8cod4tle7p1996oo.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={credentialResponse => {
                const user: User = jwtDecode(credentialResponse.credential as string);
                api.CreateUser({ token: credentialResponse.credential as string, email: user.email, name: user.name })

                localStorage.removeItem("user")
                localStorage.setItem("user", credentialResponse.credential as string)
                
                navigator("/profile")
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />;
          </GoogleOAuthProvider>
    )
}

export default GoogleOAuth