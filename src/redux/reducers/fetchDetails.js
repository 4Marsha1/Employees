import { FETCH_EMPLOYEE_DETAILS_FAILED, FETCH_EMPLOYEE_DETAILS_INITIATED, FETCH_EMPLOYEE_DETAILS_SUCCESS } from "../actions/types"

const initialState = {
    isLoading: false,
    isLoaded: false,
    employeeDetails: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEE_DETAILS_INITIATED:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_EMPLOYEE_DETAILS_SUCCESS:
            return {
                isLoading: false,
                isLoaded: true,
                employeeDetails: action.payload,
                error: ''
            }
        case FETCH_EMPLOYEE_DETAILS_FAILED:
            return {
                isLoading: false,
                isLoaded: false,
                employeeDetails: [],
                error: action.payload
            }
        default: return state;
    }
}

export default reducer;