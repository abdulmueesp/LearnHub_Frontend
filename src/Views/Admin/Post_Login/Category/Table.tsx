import Button from "../../../../Components/common/Button/Button"


const Table = () => {
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
        <tr className="text-center text-lg border">
            <td className="border">1</td>
            <td>psc</td>
            <td><Button classname="w-[100px] h-[25px] bg-red-800 text-white rounded-xl text-sm">Delete</Button></td>
        </tr>
    </tbody>
       </table>
      </div>
    </div>
  )
}

export default Table
