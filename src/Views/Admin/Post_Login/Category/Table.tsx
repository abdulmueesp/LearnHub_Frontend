import { useEffect, useState } from "react"
import Button from "../../../../Components/common/Button/Button"
import { useAppDispatch, useAppselector } from "../../../../redux/hooks"
import { getcategoryList } from "../../../../redux/pages/Categoryslice";


const Table = () => {
  
  const [category,setCategory]=useState<any>([]);

  const dispatch=useAppDispatch();

  const categorylist=useAppselector((state)=>state.categoryslice.categoryList)
      useEffect(()=>{
       dispatch(getcategoryList())
      },[dispatch])
        
      useEffect(()=>{
         if(Array.isArray(categorylist)){
          setCategory(categorylist)
         }
      },[categorylist])

  return (
    <div>
       <div className="w-min h-[400px] overflow-y-auto ml-1 sm:ml-6 lg:ml-0 ">
       <table className="w-[300px] sm:w-[500px] md:w-[600px]">
       <thead>
      <tr className="border-2 text-center bg-black text-white">
        <th>Sn</th>
        <th className="border-2">Category</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {category?.map((item:any,index:any)=>(
        <tr key={item._id} className="text-center text-lg border">
            <td className="border">{index+1}</td>
            <td>{item.categoryname}</td>
            <td><Button classname="w-[100px] h-[25px] bg-red-800 text-white rounded-xl text-sm">Delete</Button></td>
        </tr>
        ))}
    </tbody>
       </table>
      </div>
    </div>
  )
}

export default Table
