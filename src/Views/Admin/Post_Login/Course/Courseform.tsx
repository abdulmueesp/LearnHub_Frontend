import { Field, Form, Formik } from "formik";
import { courseCreateValidation } from "../../../../Validations/Coursevalidations";
import axiosInstance from "../../../../redux/interceptors/axiosconfig";
import { useAppDispatch } from "../../../../redux/hooks";
import { courseadd } from "../../../../redux/pages/Courseslice";
const Courseform = () => {
  const dispatch=useAppDispatch();

    interface coursedata{
         name:string;
         discription:string;
         language:string;
         document?:File;
         thumbnail?:File;
         video?:File;
         category:string;
         price:number;
         offerprice:number;
    }

    const initialValues:coursedata={
      name:"",
      discription:"",
      language:"",
      document:undefined,
      thumbnail:undefined,
      video:undefined,
      category:"",
      price:0,
      offerprice:0,
    }

  const handlesubmit= async(values:any)=>{
    console.log(values);
    
        const formdata=new FormData();

        formdata.append("name",values.name)
        formdata.append("description",values.discription)
        formdata.append("language",values.language)
        formdata.append("document",values.document)
        formdata.append("thumbnail",values.thumbnail)
        formdata.append("video",values.video)
        formdata.append("category",values.category)
        formdata.append("price",values.price)
        formdata.append("offerprice",values.offerprice)
           
         dispatch(courseadd(formdata))
  }
  return (
    <div className="w-min lg:w-[800px] llg:w-[900px] xl:w-[1050px] xxl:w-[1100px] 1xl:w-[1200px] 2xl:w-[1270px] h-[600px] border-2 flex justify-center items-center">
  <Formik
    initialValues={initialValues}
    validationSchema={courseCreateValidation}
    onSubmit={handlesubmit}
  >
    {({ errors, touched, setFieldValue }) => (
      <Form>
        <div className="w-[1100px] h-[500px] border flex items-center justify-center">
          <div className="w-[45%] h-[500px] border border-black flex flex-col items-center pt-[20px] space-y-2 ">

            <div className="w-min h-[90px]">
              <h2>Course name</h2>
              <Field name="name" className="w-[350px] h-[40px] border border-gray-500" />
              {errors.name && touched.name ? <div className='text-red-600 text-sm'>{errors.name}</div> : null}
            </div>

            <div className="w-min h-[120px]">
              <h2>Description</h2>
              <Field
                name="description"
                className="w-[350px] h-[60px] border border-gray-500"
                as="textarea"
              />
              {errors.discription && touched.discription ? <div className='text-red-600 text-sm'>{errors.discription}</div> : null}
            </div>

            <div className="w-min h-[90px]">
              <h2>Select Language</h2>
              <Field
                name="language"
                as="select"
                className="w-[350px] h-[40px] border border-gray-500"
              >
                <option value="" disabled>Select Language</option>
                <option value="English">English</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Tamil">Tamil</option>
              </Field>
              {errors.language && touched.language ? <div className='text-red-600 text-sm'>{errors.language}</div> : null}
            </div>

            <div className="w-min h-[90px]">
              <h2>Upload Document</h2>
              <input
                name="document"
                className="w-[350px] h-[30px] border border-gray-500"
                type="file"
                accept="application/pdf"
                onChange={(event:any) => setFieldValue('document', event.currentTarget.files[0])}
              />
              {errors.document && touched.document ? <div className='text-red-600 text-sm'>{errors.document}</div> : null}
            </div>

            <div className="w-min h-[90px]">
              <h2>Upload Thumbnail</h2>
              <input
                name="thumbnail"
                className="w-[350px] h-[30px] border border-gray-500"
                type="file"
                onChange={(event:any) => setFieldValue('thumbnail', event.currentTarget.files[0])}
              />
              {errors.thumbnail && touched.thumbnail ? <div className='text-red-600 text-sm'>{errors.thumbnail}</div> : null}
            </div>

          </div>

          {/* Right Side */}
          <div className="w-[45%] h-[500px] border border-black flex flex-col items-center pt-[30px] space-y-2">

            <div className="w-min h-[90px]">
              <h2>Upload Video</h2>
              <input
                name="video"
                className="w-[350px] h-[30px] border border-gray-500"
                type="file"
                onChange={(event:any) => setFieldValue('video', event.currentTarget.files[0])}
              />
              {errors.video && touched.video ? <div className='text-red-600 text-sm'>{errors.video}</div> : null}
            </div>

            <div className="w-min h-[90px]">
              <h2>Select Category</h2>
              <Field
                name="category"
                as="select"
                className="w-[350px] h-[40px] border border-gray-500"
              >
                <option value="English">English</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Tamil">Tamil</option>
              </Field>
              {errors.category && touched.category ? <div className='text-red-600 text-sm'>{errors.category}</div> : null}
            </div>

            <div className="w-min h-[90px]">
              <h2>Price</h2>
              <Field className="w-[350px] h-[40px] border border-gray-500" name="price" />
              {errors.price && touched.price ? <div className='text-red-600 text-sm'>{errors.price}</div> : null}
            </div>

            <div className="w-min h-[90px]">
              <h2>Offer Price</h2>
              <Field className="w-[350px] h-[40px] border border-gray-500" name="offerprice" />
              {errors.offerprice && touched.offerprice ? <div className='text-red-600 text-sm'>{errors.offerprice}</div> : null}
            </div>

            <button type="submit">Submit</button>
          </div>
        </div>
      </Form>
    )}
  </Formik>
</div>

  );
};

export default Courseform;
