import { Field, Form, Formik } from "formik"
import Manstudy from "../../../assets/manstudy.jpg"
import { adminSignupvalidation } from "../../../Validations/Adminsignupval"
const AdminSignup = () => {

   const initailvalues={
    name:"",
    email:"",
    password:""
   }

   const handlesubmit =(values:any)=>{
    console.log(values);
    
   }

  return (
    <div className="w-full h-[710px] bg-gray-100 flex justify-center items-center ">
       <div className="w-[800px] h-[450px] bg-white flex border rounded-lg shadow-custom-outer1">
          <div className="w-[63%] h-[450px]  border-red-500 pt-[30px] ">
            {/* signup  */}
            <div className="w-[500px] h-[35px]  rounded-lg flex items-center justify-center">
               <h2 className=" text-xl font-bold font-sans text-yellow-900">SIGNUP</h2>
            </div>
            {/* form section  */}
            <Formik 
            initialValues={initailvalues}
            validationSchema={adminSignupvalidation}
            onSubmit={handlesubmit}
            >
            {({ errors, touched }) => (
           <Form className="w-[500px] h-[300px] border-t  flex flex-col items-center p-[30px] space-y-8">
            <div>
                <Field type="text" name="name" placeholder="Name" className="w-[300px] h-[30px] border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-gray-300 font-local2" />
                {errors.name && touched.name ? <div className='text-red-600 text-sm'>{errors.name}</div> : null}
            </div> 
            <div>
                <Field type="email" name="email" placeholder="Email" className="w-[300px] h-[30px] border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-gray-300 font-local2" />
                {errors.email && touched.email ? <div className='text-red-600 text-sm'>{errors.email}</div> : null}
                </div>
            <div>
                <Field type="password" name="password" placeholder="Password" className="w-[300px] h-[30px] border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-gray-300 font-local2" />
                {errors.password && touched.password ? <div className='text-red-600 text-sm'>{errors.password}</div> : null}
                </div>
                <div>
                    <button type="submit" className="w-[150px] h-[40px]  bg-yellow-900 text-white shadow-custom-outer font-local2">Create Account</button>
                </div>
           </Form>
             )} 
            </Formik>
            <div className="w-[500px] h-[40px]  mt-[35px] flex justify-center items-center">
                <h2>Already have an account? <span className="text-yellow-900 underline underline-offset-2">Sign in</span></h2>
            </div>
          </div>
          {/* img section  */}
          <div className="w-400px h-[450px]  border-yellow-300 ">
            <img src={Manstudy} alt="" className="h-[449px] rounded-r-lg" />
          </div>
       </div>
    </div>
  )
}

export default AdminSignup
