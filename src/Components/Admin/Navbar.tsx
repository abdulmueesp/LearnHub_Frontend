import pfphoto from "../../assets/pfphoto.jpg"

const Navbar = () => {
  return (
    <div className="w-full h-[55px] border-y  flex justify-between pr-[50px]" >
        {/* name  */}
      <div className="w-[270px] h-[55px] bg-white flex flex-col items-center justify-center ">
      <h2 className="font-bold text-xl " style={{ color: "hsl(217.24deg 32.58% 17.45%)" }}>Admin Panel</h2>
      </div>
      {/* img  */}
      <div>
        <img src={pfphoto} alt="" className="w-[55px] h-[50px]  " />
      </div>
    </div>
  )
}

export default Navbar
