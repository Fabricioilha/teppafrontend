import { createContext, ReactNode, useContext, useReducer } from "react";

export enum FormActions{
    setCurrentStep,
    setNome,
    setAno,
    setDesc,
    setImagem,
    setId
}

const initialData: StateType = {
    currentStep: 0,
    nome: "",
    desc: "",
    imagem: "",
    ano: "",
    id: ""
}
type PropsProvider = {
    children: ReactNode
}

type StateType = {
    currentStep: number,
    nome: string,
    ano: string,
    desc: string,
    imagem: string,
    id: string
}

type ActionType = {
    type: FormActions,
    payload: any
}
type ContextType = {
    state: StateType,
    dispatch: (action: ActionType)=> void;
}

const FormContext = createContext<ContextType | undefined>(undefined)

const formReducer = (state: StateType, action: ActionType) =>{
    switch(action.type){
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload}
        case FormActions.setNome:
            return {...state, nome: action.payload}
        case FormActions.setAno:
            return {...state, ano: action.payload}
        case FormActions.setDesc:
            return {...state, desc: action.payload}
        case FormActions.setImagem:
            return {...state, image: action.payload}
        case FormActions.setId:
            return{... state, id: action.payload}
        default:
            return state
    }
}

export const FormProvider = ({children}:PropsProvider)=>{
    const [ state, dispatch ] = useReducer(formReducer, initialData)
    const value = {state, dispatch}
    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = ()=>{
    const context = useContext(FormContext)
    if(context === undefined){
        throw new Error("useForm presica ser usado dentro do FormProvider")
    }
    return context
}