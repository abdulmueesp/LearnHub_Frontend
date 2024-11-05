import { Field, Form, Formik } from "formik"
import Button from "../../../../Components/common/Button/Button"


const CategoryForm = () => {
  const handlesubmit=()=>{

  }
  return (
    <div className="w-[650px] h-[90px] border-2 bg-white flex justify-center items-center space-x-10 rounded-3xl shadow-md">
      <Formik
      initialValues={{categoryname:""}}
      onSubmit={handlesubmit}
      >
      <Form>
        <Field 
        className="w-[400px] h-[40px]  text-lg border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-gray-300"
        name="categoryname"
        />
        </Form>        

      </Formik>
      <Button/>
     </div>
  )
}

export default CategoryForm
