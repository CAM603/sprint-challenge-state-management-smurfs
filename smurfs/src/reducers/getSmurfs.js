import { 
    GET_SMURFS_START, 
    GET_SMURFS_SUCCESS, 
    GET_SMURFS_FAILURE 
} from '../actions/getSmurfs';

const initialState = {
    smurfs: [],
    loading: false,
    error: ''
}

export const getSmurfs = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURFS_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                loading: false,
                smurfs: action.payload
            }
        case GET_SMURFS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}