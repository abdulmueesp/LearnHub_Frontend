import { combineReducers } from "@reduxjs/toolkit";
import adminslice from "./pages/Adminslice"

const rootReducer=combineReducers({
    adminslice:adminslice,
})

export type rootstate =ReturnType<typeof rootReducer>

export default rootReducer