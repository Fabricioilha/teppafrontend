import { useEffect } from "react"
import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { FormActions, useForm } from "../../context/formContext"
import Layout from "../Layout/Layout"
import "../../styles/steps.css"


const StepOne = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()
    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 10
        })
    }, [])
    
    const changeNome = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: FormActions.setNome, payload: e.target.value })
    }
    const buttonAvancar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if(state.nome === ""){       
            alert("DIGITE ALGUM NOME")
        }else{
            navigate("/step2");
        }
    }
    return (
        <Layout>
            <Container>
                    <h2 className="my-5">Qual o nome do filme ou série que você quer comentar?</h2>
                    <input 
                        type="text" 
                        placeholder="nome do filme" 
                        onChange={changeNome} id="myinput-1"
                        className="text-center fs-1 w-100 my-5 my-input rounded"
                        value={state.nome}
                        autoFocus />
                
                <div className="d-flex justify-content-between">
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={()=>{navigate("/")}}
                    >
                        Voltar
                    </Button>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={(e)=>{buttonAvancar(e)}}
                    >
                        Avançar
                    </Button>
                </div>
            </Container>
        </Layout>
    )
}
export default StepOne