import { getAuth, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth"
import { createContext, ReactNode, useState } from "react"
import { useNavigate } from "react-router-dom";
import { app } from "../services/firebaseConfig"

export type AuthContextType = {
    isLogged: ()=> void ;
    user: User | null;
    signInGoogle: ()=> void;
    signout: () => void;
}


const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext<AuthContextType>(null!!)

export const AuthGoogleProvider = ({ children }:{children: ReactNode}) => {
    const navigate = useNavigate()
    
    const [user, setUser] = useState<any | null>(null) 

    const auth = getAuth(app);
    
    const signInGoogle = async () => {
        await signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken as string
            const user = result.user;
            setUser(user)
            sessionStorage.setItem("@AuthFirebase:token", token);
            sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
            navigate("/")

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage,email,credential);
        })
    }
    
    
    const isLogged = async ()=>{
        const sessionUser = sessionStorage.getItem("@AuthFirebase:user")
        if(sessionUser){
            setUser(JSON.parse(sessionUser))
            navigate("/")
        }
    }

    const signout = async () =>{
        sessionStorage.clear()
        setUser(null)
        navigate("/login")
    }

    return(
        <AuthGoogleContext.Provider value={{signInGoogle, isLogged, user, signout }}>
            {children}
        </AuthGoogleContext.Provider>
    )
}

