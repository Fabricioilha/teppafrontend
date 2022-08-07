import { Route, Routes } from "react-router-dom"
import Editar from "../pages/form/Editar"
import Resume from "../pages/form/Resume"
import StepOne from "../pages/form/StepOne"
import StepTrhee from "../pages/form/StepThree"
import StepTwo from "../pages/form/StepTwo"
import Home from "../pages/Home"
import Login from "../pages/Login"
import RequireAuth from "./RequirAuth"

const AppRoutes = () =>{

    return(
        <Routes>        
          <Route path="/login" element={<Login /> } />
          <Route path="/" element={ <RequireAuth element={<Home />} />}/> 
          <Route path="/step1" element={<RequireAuth element={<StepOne />} />} />          
          <Route path="/step2" element={<RequireAuth element={<StepTwo />} />} />          
          <Route path="/step3" element={<RequireAuth element={<StepTrhee />} />} />       
          <Route path="/resume" element={<RequireAuth element={<Resume />} />} />      
          <Route path="/editar" element={<RequireAuth element={<Editar />} />} />
      </Routes>
    )
}
export default AppRoutes