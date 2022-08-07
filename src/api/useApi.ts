import axios from 'axios'

class useApi {
    
    //BASE_URL_ONLINE = "https://backendteppadev.herokuapp.com"
    //BASE_URL_LOCAL = "http://localhost:3001"
    
    BASE_URL = "https://backendteppadev.herokuapp.com"
    createOne = async (nome:string, anoString:string, critica:string)=>{
        const ano = Number(anoString)
        if(nome && anoString && critica){
            const req = await axios.post(`${this.BASE_URL}/movie/`,{nome, ano, critica})
            return req.data
        }
        return console.log("Falta de paramtros")
    }

    readAll = async ()=>{
        const req = await axios.get(`${this.BASE_URL}/movie`)
        const filmes = req.data
        if(filmes.status === 1){
            return filmes.data
        }else{
            return {status: 0, message:"Erro na requisição"}
        }
    }
    readOne = async (filmeId: string)=>{
        const req = await axios.get(`${this.BASE_URL}/movie/${filmeId}`)
        const filme = await req.data
        if(filme.status === 1){
            return filme.data
        }else{
            return {status: 0, message:"Erro na requisição"}
        }
    }
    deleteOne = async (filmeId:string)=>{
        const req = await axios.delete(`${this.BASE_URL}/movie/${filmeId}`)
        const filmes = await req.data
        if(filmes.status === 1){
            return filmes
        }else{
            return {status: 0, message:"Erro na requisição"}
        }
    }
    updateOne = async (filmeId:string, nome?:string, ano?:string, critica?:string)=>{
        const req = await axios.put(`${this.BASE_URL}/movie/${filmeId}`,{nome, ano, critica})
        const filmes = await req.data
        if(filmes.status === 1){
            return filmes
        }else{
            return {status: 0, message:"Erro na requisição"}
        }
    }
}

export const api = new useApi()

