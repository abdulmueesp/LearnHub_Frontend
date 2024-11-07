import { Field, Form, Formik } from "formik"
import Button from "../../../../Components/common/Button/Button"
import { useAppDispatch } from "../../../../redux/hooks"
import { createcategory } from "../../../../redux/pages/Categoryslice";

const CategoryForm = () => {
 const dispatch=useAppDispatch();
   
  const handlesubmit=(values:any)=>{
      dispatch(createcategory(values))  
  }
  
  return (
    <div className="w-[350px] md:w-[650px] h-[55px] border-2 bg-white flex justify-center items-center md:space-x-10 shadow-md  ml-1 md:ml-6 lg:ml-0">
      <Formik
      initialValues={{categoryname:""}}
      onSubmit={handlesubmit}
      >
      <Form>
        <Field 
        className="w-[200px] md:w-[400px] h-[40px]  text-base border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-gray-300"
        name="categoryname"
        placeholder="Enter Category"
        required
        />
        <Button Type="submit" classname="w-[100px] h-[35px] border-2 bg-black text-white rounded-2xl font-local2">Add</Button>
        </Form>        
      </Formik>
     
     </div>
    
  )
}

export default CategoryForm
