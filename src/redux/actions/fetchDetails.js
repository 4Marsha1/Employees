import axios from "axios"
import { FETCH_EMPLOYEE_DETAILS_FAILED, FETCH_EMPLOYEE_DETAILS_INITIATED, FETCH_EMPLOYEE_DETAILS_SUCCESS } from "./types"

export const fetchDetails = () => async (dispatch) => {
    dispatch({
        type: FETCH_EMPLOYEE_DETAILS_INITIATED
    })
    try {
        const res = await axios.get("https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees");
        const data = await res.data;
        dispatch({
            type: FETCH_EMPLOYEE_DETAILS_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err.message);
        dispatch({
            type: FETCH_EMPLOYEE_DETAILS_FAILED,
            payload: err.message
        })
    }
}