import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import axiosInstance from "../interceptors/axiosconfig";
import { alert } from "../../Components/common/sweetAlert/alert";
interface signupstate {
    response:any | null;
}

const initialState :signupstate={
    response:null,
}

const Adminslice =createSlice({
    name:"adminslice",
    initialState,
    reducers:{
        setData:(state,{ payload } : PayloadAction<any>)=>{
            state.response=payload;
        }
    },
})

  export const createadmin=(values:any):AppThunk => async ()=>{
    
    try{
       console.log("hi");  
     const response=await axiosInstance.post("/admin/signup",values)
          if(response.status===201){
            alert("success",response.data.message)
          }}catch (error: any) {
          if (error.response && error.response.status === 409) {
            alert("error", error.response.data.message);
          }
          }

          
        }



export const{setData}=Adminslice.actions

export default Adminslice.reducer;