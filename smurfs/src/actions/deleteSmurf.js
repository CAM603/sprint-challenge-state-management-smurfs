import axios from 'axios';

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const deleteSmurf = (id) => dispatch => {
    dispatch({ type: DELETE_SMURF_START })
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            dispatch({ type: DELETE_SMURF_SUCCESS, payload: id })
        })
        .catch(err => {
            dispatch({ type: DELETE_SMURF_FAILURE, payload: err.response })
        })
}