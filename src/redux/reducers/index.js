import { combineReducers } from "redux";
import employeeDetails from "./fetchDetails";

export default combineReducers({
    employeeReducer: employeeDetails
})