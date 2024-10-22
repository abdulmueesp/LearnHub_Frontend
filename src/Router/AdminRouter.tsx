import { Route, Routes } from "react-router-dom"
import Sample from "../Components/Admin/Sample"
import Layout from "../Components/Admin/Layout"


const AdminRouter = () => {
  return (
     <> 
     <Layout>
     <Routes>
        <Route path="sample" element={<Sample/>} />
     </Routes>
     </Layout>
     </>
  )
}

export default AdminRouter
