import { useContext, useEffect } from "react"
import { Button, Container } from "react-bootstrap"
import { AuthGoogleContext } from "../context/authGoogle"
import {} from "@fortawesome/fontawesome-svg-core"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import "../styles/login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Login = () => {
    const auth = useContext(AuthGoogleContext)

    const loginGoogle = async () =>{
        auth.signInGoogle()
    }

    useEffect(()=>{
        auth.isLogged()
    },[])
    
    return (
        <Container>
            <div className="style-login d-flex flex-column w-50 mx-auto align-items-center justify-content-center gap-5" >
                <h3>Formulário Multi-step <a href="https://teppadev.com.br/">TeppaDev</a></h3>
                <h1>Login</h1>
                <p className="text-muted">Faça o Login de forma segura usando sua conta google</p>
                <Button onClick={ loginGoogle } className="d-flex gap-3 align-items-center" >
                    <FontAwesomeIcon icon={faGoogle} />
                    Entrar com Google 
                </Button>
                <p className="text-muted">Em breve, novas formas de login...</p>
            </div>

        </Container>
    )    
}

export default Login