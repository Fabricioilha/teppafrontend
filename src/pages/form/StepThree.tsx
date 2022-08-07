import { useEffect } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { FormActions, useForm } from "../../context/formContext"
import Layout from "../Layout/Layout"


const StepTrhee = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()
    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 75
        })
    }, [])

    const changeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({ type: FormActions.setDesc, payload: e.target.value })
    }
    const buttonAvancar = () => {
        navigate("/resume");
    }
    return (
        <Layout>
            <Container>                
                <div className="mb-3 text-center">
                    <h2 className="my-5">Crítica</h2>
                    <textarea 
                        onChange={(e)=>{changeDesc(e)}} 
                        rows={10} 
                        className="rounded mx-auto"
                        style={{width:"70%", outline:"none", padding:"1rem", borderColor:"#AAA"}}
                        placeholder="No início tava bem ruim mas quando chegou no final parecia o início"
                        value={state.desc}    
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={()=>{navigate("/step2")}}
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
export default StepTrhee