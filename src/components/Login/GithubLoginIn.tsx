import { GithubAuthProvider, OAuthCredential, signInWithPopup } from "firebase/auth";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLogged, getUser, User } from "../../state/slices/loginSlice";
import { auth } from "./firebaseConfig";

interface IGithubLogInProps {}

const providerGithubAuth = new GithubAuthProvider();

const GithubLogIn: React.FunctionComponent<IGithubLogInProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithGithubButton = () => {
    signInWithPopup(auth, providerGithubAuth)
      .then((result) => {
        console.log(result);

        // This gives you a Github Access Token. You can use it to access the Github API.
        const credential: OAuthCredential | null =
        GithubAuthProvider.credentialFromResult(result);

        const token = credential!.accessToken;

        
        // The signed-in user info.
        //If the logged in is succesfull you will acces this part of the code where you will
        //get a lot of information about the user that have logged in
        const user = result.user;

        /*Whit the information of the user you can populate an state that is mainly focused on 
                  holding the information of the user that is logged in*/

        
        dispatch(getUser({uid: user.uid, userName: user.displayName, userImage: user.photoURL} as User));
        dispatch(getLogged(true))

        navigate("/stock");

        // ...
      })
      .catch((error:any) => {
        console.log(error);

        //If the logged in is not succesfull yu will get to this part and with the message you can tell
        //the user what went wrong

        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <button onClick={signInWithGithubButton}> Log in with Github </button>
    </div>
  );
};

export default GithubLogIn;
