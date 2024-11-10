import Button from "../../../../Components/common/Button/Button"


const Course = () => {
  return (
    <div>
    <div className="w-min lg:w-[800px] llg:w-[900px] xl:w-[1050px] xxl:w-[1100px] 1xl:w-[1200px] 2xl:w-[1270px] h-[90px]  flex  items-center pl-[15px]">
       <Button to="/admin/addcourse" classname="w-[150px] h-[35px] border-2 border-black  font-semibold text-white bg-black" >Add course</Button>
    </div>
    </div>
  )
}

export default Course
