import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect } from "react"
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { AuthGoogleContext } from "../../context/authGoogle"
import { FormActions, useForm } from "../../context/formContext"

const Header = ()=>{
    const navigate = useNavigate()
    const auth = useContext(AuthGoogleContext)
    const { state, dispatch } = useForm()
    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 0
        })
    },[])
    return(
        <Container>
            <Row className="align-items-center border-bottom mt-5">
                <Col xs={8}>
                    Bem vindo!<h1>{auth.user?.displayName}</h1>
                </Col>
                <Col xs={3}>
                    <Button variant="danger" className="px-4" onClick={auth.signout} >Sair</Button>
                </Col>
            </Row>
            <Row>
                <Col className="my-5 d-flex flex-column gap-2 align-items-start">
                    <p>Registre suas críticas e opiniões sobre seus filmes e séries favoritas</p>
                    <div className="d-flex gap-3">
                        <Button variant="success" className="px-4" onClick={()=>{navigate("/")}}>
                            <FontAwesomeIcon icon={faHome} />
                        </Button>
                        <Button variant="primary" className="px-2 d-flex justify-content-center align-items-center gap-1" onClick={()=>{navigate("/step1")}} >
                            <FontAwesomeIcon icon={faPlus} />
                            Novo
                        </Button>
                    </div>
                </Col>
            </Row>
            {state.currentStep > 0 && 
                <ProgressBar animated now={state.currentStep} />
            }
        </Container>
    )
}
export default Header