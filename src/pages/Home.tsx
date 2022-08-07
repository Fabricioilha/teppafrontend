import { useEffect, useState } from "react"
import { Button, Card, Container, Popover } from "react-bootstrap"
import { api } from "../api/useApi"
import Layout from "./Layout/Layout"
import ReactLoading from 'react-loading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { filmeType } from "../types/types";
import "../styles/home.css"
import { useNavigate } from "react-router-dom";
import { FormActions, useForm } from "../context/formContext";

const Home = () => {
    const {dispatch} = useForm()
    const navigate = useNavigate()
    const [filmes, setFilmes] = useState<filmeType[]>([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        loadFIlmes()
    }, [])
    const loadFIlmes = async () => {
        const req = await api.readAll()
        if (req) {
            setFilmes(req)
            setLoading(false)
        }
    }
    const btnConfirmaDelete = async (id:string)=>{
        setLoading(true)
        const currentDiv = await document.getElementById(id)
        const deleted = await api.deleteOne(id)
        console.log(deleted)
        if(deleted){
            alert("Deletado com sucesso!")
            await currentDiv?.classList.remove("boxShow")
            setLoading(false)
            loadFIlmes()
        }else{
            alert("Não excluido")
        }
    }
    const openBoxBtn = (id:string)=>{
        const currentDiv = document.getElementById(id)
        currentDiv?.classList.add("boxShow")
    }
    const closeBoxBtn = async (id:string)=>{        
        const currentDiv = await document.getElementById(id)
        await currentDiv?.classList.remove("boxShow")
    }
    const btnEdit = async(id:string)=>{
        const getfilme = await api.readOne(id)
        if(getfilme){
            dispatch({type: FormActions.setAno, payload: getfilme.ano})        
            dispatch({type: FormActions.setNome, payload: getfilme.nome})        
            dispatch({type: FormActions.setDesc, payload: getfilme.critica})     
            dispatch({type: FormActions.setId, payload: id})
            navigate("/editar")
        }else{
            alert("Problemas na requisição")
        }
    }
    return (
        <Layout>            
            <Container className="d-flex gap-3 flex-wrap">
                {loading && <ReactLoading type={"spinningBubbles"} color={"red"} height={80} width={80} />}
                {filmes.map((filme, index) => (
                    <Card style={{ width: '20rem', height:"30rem" }} key={index} className="shadow">

                        <Card.Img 
                            variant="top" 
                            src="https://i.picsum.photos/id/408/200/300.jpg?hmac=WHLCqIpd4lzmPZlRRMknXp1aOoOr7_qdtEUwozDmIWQ" 
                            style={{ height: "13em" }} 
                        />

                        <Card.Body className="d-flex flex-column justify-content-between">
                            <Card.Title>{`${filme.data.nome} - ${filme.data.ano}`}</Card.Title>
                            <Card.Text>
                                <span>
                                    {`${filme.data.critica.substring(0,100)}...`}
                                </span>
                            </Card.Text>
                            <div className="d-flex justify-content-between align-items-center position-relative">
                                <div className="div-icon-edit" onClick={()=>{btnEdit(filme.id)}}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </div>
                                <div className="div-icon-trash position-relative" onClick={()=>{openBoxBtn(filme.id)}}>                           
                                    <div className="boxDelete" id={`${filme.id}`}>
                                        <div className="boxDeleteBtn">
                                            <Button variant="danger" onClick={()=>{btnConfirmaDelete(filme.id)}} >Confirmar</Button>
                                            <Button onClick={()=>{closeBoxBtn(filme.id)}}>Desistir</Button>
                                        </div>
                                    </div>
                                    
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </Layout>
    )
}

export default Home

