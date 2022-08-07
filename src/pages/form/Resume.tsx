import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { FormActions, useForm } from "../../context/formContext";
import Layout from "../Layout/Layout";
import "../../styles/steps.css";
import { api } from "../../api/useApi";

const Resume = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { state, dispatch } = useForm()
    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 100
        })
    }, [])
    const handleSubmit = async () => {
        setLoading(true)        
        const created = await api.createOne(state.nome, state.ano, state.desc);
        alert("Cadastrado com sucesso")
        clearData()
        setLoading(false)
        navigate("/")
    }

    const clearData = () =>{
        dispatch({type: FormActions.setAno, payload: ""})
        dispatch({type: FormActions.setNome, payload: ""})
        dispatch({type: FormActions.setDesc, payload: ""})
        dispatch({type: FormActions.setImagem, payload: ""})
        dispatch({type: FormActions.setCurrentStep, payload: 0})
    }

    return (
        <Layout>
            <Container>
                <Row>
                    {loading && <ReactLoading type={"spinningBubbles"} color={"red"} height={80} width={80} />}
                    <form>                        
                        <p>Nome</p>
                        <input type="text" readOnly value={state.nome} className="fs-3 text-center my-input rounded" />
                    
                        <p>Ano</p>
                        <input type="text" readOnly value={state.ano} className="fs-3 text-center my-input rounded" />
                    
                        <p>Crítica</p>
                        <div className="my-text-area rounded p-2">
                            {`" ${state.desc} "`}
                        </div>                        
                    </form>
                </Row>
                <Row className="text-center">
                    <Col xs={6}><Button onClick={() => { navigate("/step3") }}>Voltar</Button></Col>
                    <Col xs={6}><Button onClick={handleSubmit} variant="success">Confirmar Envio</Button></Col>
                </Row>
            </Container>
        </Layout>
    )
}
export default Resume