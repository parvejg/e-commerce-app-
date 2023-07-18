import { Link } from "react-router-dom"
import { SignIn, SignUp } from "./ModalPage"

export const SignInPage=()=>{
    return <div className="signInpage-wrapper">
 <SignUp/>
 <SignIn/>
       
    </div>
       
}