// import { POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAILURE } from "../actions/postSmurf"

// const initialState = {
//     smurfs: [],
//     posting: false,
//     error: ''
// }

// export const postSmurf = (state = initialState, action) => {
//     switch(action.type) {
//         case POST_SMURF_START:
//             return {
//                 ...state,
//                 posting: true,
//             }
//         case POST_SMURF_SUCCESS:
//             return {
//                 ...state,
//                 smurfs: [...state.smurfs, action.payload],
//                 posting: false
//             }
//         case POST_SMURF_FAILURE:
//             return {
//                 ...state,
//                 posting: false,
//                 error: action.payload
//             }
//         default:
//             return state
//     }
// }