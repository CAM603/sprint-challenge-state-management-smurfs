import { 
    GET_SMURFS_START, 
    GET_SMURFS_SUCCESS, 
    GET_SMURFS_FAILURE 
} from '../actions/getSmurfs';
import { POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAILURE } from "../actions/postSmurf"

const initialState = {
    smurfs: [],
    loading: false,
    error: '',
    posting: false
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
        case POST_SMURF_START:
            return {
                ...state,
                posting: true,
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                posting: false
            }
        case POST_SMURF_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload
            }
        default:
            return state
    }
}