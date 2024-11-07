import { useEffect } from "react"
import CategoryForm from "./CategoryForm"
import Table from "./Table"


const Category = () => {
  useEffect(()=>{
    localStorage.removeItem("token");
  })
  return (
      <div className="w-min lg:w-[800px] llg:w-[900px] xl:w-[1050px] xxl:w-[1100px] 1xl:w-[1200px] 2xl:w-[1270px] h-[600px] flex flex-col items-center pt-[60px] space-y-9  " >
     <CategoryForm/>
     <Table/>
      </div>
  )
}

export default Category
