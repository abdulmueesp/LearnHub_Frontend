import { Route, Routes } from "react-router-dom"
import Sample from "../Components/Admin/Sample"
import Layout from "../Components/Admin/Layout"
import AdminSignup from "../Views/Admin/Pre_Login/AdminSignup"
import Adminlogin from "../Views/Admin/Pre_Login/Adminlogin"


const AdminRouter = () => {
  return (
     <> 

     <Routes>
      <Route path="adminsignup" element={<AdminSignup/>} />
      <Route path="adminlogin" element={<Adminlogin/>} />
      
      <Route path="/*" element={<Layout/>} >
        <Route path="sample" element={<Sample/>} />    
        </Route>
     </Routes>
     
     </>
  )
}

export default AdminRouter
