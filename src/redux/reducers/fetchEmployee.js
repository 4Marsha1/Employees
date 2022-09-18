import { FETCH_EMPLOYEE_FAILED, FETCH_EMPLOYEE_INITIATED, FETCH_EMPLOYEE_SUCCESS } from "../actions/types"

const initialState = {
    isLoading: false,
    isLoaded: false,
    employee: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEE_INITIATED:
            return {
                ...state,
                employee: [],
                isLoading: true
            }
        case FETCH_EMPLOYEE_SUCCESS:
            return {
                isLoading: false,
                isLoaded: true,
                employee: action.payload,
                error: ''
            }
        case FETCH_EMPLOYEE_FAILED:
            return {
                isLoading: false,
                isLoaded: false,
                employee: [],
                error: action.payload
            }
        default: return state;
    }
}

export default reducer;