import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import axiosInstance from "../interceptors/axiosconfig";

interface categorystate{
    categoryList:any
}
const initialState:categorystate={
    categoryList:""
}

const Categoryslice=createSlice({
    name:"categoryslice",
    initialState,
    reducers:{
        setCategoryList:(state,{payload}:PayloadAction<any>)=>{
            state.categoryList=payload
        }
    }
})


  export const createcategory=(value:any):AppThunk =>async ()=>{
        const response=await axiosInstance.post("admin/category",value)
  }







export const {setCategoryList}=Categoryslice.actions


