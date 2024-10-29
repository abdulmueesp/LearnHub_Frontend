import { Navigate, Route, Routes } from "react-router-dom"
import Sample from "../../Components/Admin/Sample"
import Layout from "../../Components/Admin/Layout"
import AdminSignup from "../../Views/Admin/Pre_Login/AdminSignup"
import Adminlogin from "../../Views/Admin/Pre_Login/Adminlogin"
import ProtectedRoute from "./Protectedroute"
import { useEffect, useState } from "react"
import RedirectRoute from "./Redirectroute"


const AdminRouter = () => {
    const [isLogged,setLogged]=useState<boolean>(false)

     useEffect(()=>{
        const token=localStorage.getItem("token")
          if(token){
            setLogged(true)
          }else{
            setLogged(false)
          }
     })

  return (
     <> 

     <Routes>
        <Route element={<RedirectRoute isLogged={isLogged} />}>
      <Route path="adminsignup" element={<AdminSignup/>} />
      <Route path="adminlogin" element={<Adminlogin/>} />
      </Route>

            <Route element={<ProtectedRoute isLogged={isLogged}/>}>
                <Route path="/*" element={<Layout/>} >
                    <Route path="sample" element={<Sample/>} />    
                </Route>
            </Route>


        <Route path="*"  element={<Navigate to='adminlogin' replace />}/>
     </Routes>
     
     </>
  )
}

export default AdminRouter