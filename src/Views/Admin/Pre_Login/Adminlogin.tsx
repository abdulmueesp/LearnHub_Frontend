
import { Field, Form, Formik } from "formik"
import Manstudy from "../../../assets/manstudy.jpg"
import { Adminloginvalidation } from "../../../Validations/Adminsignupval";
import { Link} from "react-router-dom";
import { Login } from "../../../redux/pages/Adminslice";
import { useAppDispatch} from "../../../redux/hooks";
const Adminlogin = () => {

    const dispatch=useAppDispatch();
     
  interface AdminLoginValues {
    email: string;
    password: string;
  }

  const initialValues:AdminLoginValues={
    email:"",
    password:"",
  }
     const handlesubmit=async (values:any)=>{
       dispatch(Login((values)))  
        
     }

  return (
    <div>
      <div className="w-full h-[710px] bg-gray-100 flex justify-center items-center ">
       <div className="w-[800px] h-[450px] bg-white flex border rounded-lg shadow-custom-outer1">
          <div className="w-[63%] h-[450px]  border-red-500 pt-[30px] ">
            {/* signup  */}
            <div className="w-[500px] h-[35px]  rounded-lg flex items-center justify-center">
               <h2 className=" text-xl font-bold font-sans text-yellow-900">LOGIN</h2>
            </div>
            {/* form section  */}
            <Formik
            initialValues={initialValues}
            validationSchema={Adminloginvalidation}
            onSubmit={handlesubmit}
            >
               {({ errors, touched }) => (
              <Form className="w-[500px] h-[250px] border-t  flex flex-col justify-center items-center p-[30px] space-y-8">
                <div>
                 <Field type="text" name="email" placeholder="Email" className="w-[300px] h-[30px] border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-gray-300 font-local2" />
                 {errors.email && touched.email? <div className='text-red-600 text-sm'>{errors.email}</div> : null}
                 </div>
                 <div>
                 <Field type="password" name="password" placeholder="Password" className="w-[300px] h-[30px] border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-gray-300 font-local2" />
                 {errors.password && touched.password? <div className='text-red-600 text-sm'>{errors.password}</div> : null}
                 </div>
                 <button type="submit" className="w-[150px] h-[40px]  bg-yellow-900 text-white shadow-custom-outer font-local2">Login</button>
              </Form>
                  )} 
            </Formik>
            <div className="w-[500px] h-[40px]  mt-[35px] flex justify-center items-center">
                <h2>Don't have an account? <span className="text-yellow-900 underline underline-offset-2"><Link to={"/admin/adminsignup"}>Sign Up</Link></span></h2>
            </div>
          </div>
          {/* img section  */}
          <div className="w-400px h-[450px]  border-yellow-300 ">
            <img src={Manstudy} alt="" className="h-[449px] rounded-r-lg" />
          </div>
       </div>
    </div>
    </div>
  )
}

export default Adminlogin
