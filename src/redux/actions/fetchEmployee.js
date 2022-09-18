import axios from "axios"
import { FETCH_EMPLOYEE_FAILED, FETCH_EMPLOYEE_INITIATED, FETCH_EMPLOYEE_SUCCESS } from "./types"

export const fetchEmployee = (name) => async (dispatch) => {
    dispatch({
        type: FETCH_EMPLOYEE_INITIATED
    })
    try {
        const res = await axios.get(`https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/${name}`);
        const data = await res.data;
        dispatch({
            type: FETCH_EMPLOYEE_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: FETCH_EMPLOYEE_FAILED,
            payload: error.message
        })
    }
}