import { combineReducers } from "redux";
import employeeDetails from "./fetchDetails";
import employee from './fetchEmployee';

export default combineReducers({
    employeeDetailsReducer: employeeDetails,
    employeeReducer: employee
})