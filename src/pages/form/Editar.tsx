import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { FormActions, useForm } from "../../context/formContext";
import Layout from "../Layout/Layout";
import "../../styles/steps.css";
import { api } from "../../api/useApi";

const Editar = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { state, dispatch } = useForm()
    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 0
        })
    }, [])
    const handleSubmit = async () => {
        setLoading(true)        
        const updated = await api.updateOne( state.id , state.nome, state.ano, state.desc);
        console.log(updated)
        if(updated){
            alert("Atualizado com sucesso")
            clearData()
            setLoading(false)
            navigate("/")
        }
    }

    const handleVoltar = ()=>{
        clearData()
        navigate("/")
    }

    const clearData = () =>{
        dispatch({type: FormActions.setAno, payload: ""})
        dispatch({type: FormActions.setNome, payload: ""})
        dispatch({type: FormActions.setDesc, payload: ""})
        dispatch({type: FormActions.setImagem, payload: ""})
        dispatch({type: FormActions.setCurrentStep, payload: 0})
        dispatch({type: FormActions.setId, payload: ""})
    }

    return (
        <Layout>
            <Container>
                <Row><h1>Atualizar Registro</h1>
                    {loading && <ReactLoading type={"spinningBubbles"} color={"red"} height={80} width={80} />}
                    <form > 

                        <p>Nome</p>
                        <input type="text" 
                            onChange={(e)=>{dispatch({type:FormActions.setNome, payload: e.target.value})}} 
                            value={state.nome} 
                            className="fs-3 text-center my-input rounded" 
                        />
                        <p>Ano</p>
                        <input type="text" 
                            onChange={(e)=>{dispatch({type:FormActions.setAno, payload: e.target.value})}} 
                            value={state.ano} 
                            className="fs-3 text-center my-input rounded" 
                        />
                        <p>Crítica</p>
                        <textarea 
                            className="my-text-area w-100 border-0 mx-auto rounded p-2" 
                            onChange={(e)=>{dispatch({type:FormActions.setDesc, payload: e.target.value})}}
                            value={state.desc}
                            autoFocus >
                        </textarea>
                    </form>
                </Row>
                <Row className="text-center">
                    <Col xs={6}><Button onClick={handleVoltar}>Voltar</Button></Col>
                    <Col xs={6}><Button onClick={handleSubmit} variant="success">Confirmar Edição</Button></Col>
                </Row>
            </Container>
        </Layout>
    )
}
export default Editar