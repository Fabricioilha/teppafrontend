import { useEffect } from "react"
import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { FormActions, useForm } from "../../context/formContext"
import Layout from "../Layout/Layout"
import "../../styles/steps.css"


const StepTwo = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()
    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 50
        })
    }, [])

    const changeAno = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: FormActions.setAno, payload: e.target.value })
    }
    const buttonAvancar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if(!state.ano || Number(state.ano) < 1880){      
            alert("DIGITE UM ANO VÁLIDO")
        }else{
            navigate("/step3");
        }
    }
    return (
        <Layout>
            <Container>                    
                <h2 className="my-5">Qual o ano do filme ou série que você quer comentar?</h2>
                <input 
                    type="text" 
                    placeholder="1922" 
                    onChange={changeAno} id="myinput-2"
                    className="text-center fs-1 w-100 rounded my-5 my-input"
                    value={state.ano}
                    autoFocus 
                />
                <div className="d-flex justify-content-between">
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={()=>{navigate("/step1")}}
                    >
                        Voltar
                    </Button>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={buttonAvancar}
                    >
                        Avançar
                    </Button>
                </div>
            </Container>
        </Layout>
    )
}
export default StepTwo