import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminRouter from "./AdminRouter"


const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminRouter/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainRouter
