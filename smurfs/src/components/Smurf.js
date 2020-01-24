import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteSmurf } from '../actions/deleteSmurf';

const Smurf = (props) => {
    const dispatch = useDispatch()
    return (
        <tr>
            <td>{props.smurf.name}</td>
            <td>{props.smurf.age}</td>
            <td>{props.smurf.height}</td>
            <td className="button-container" onClick={() => dispatch(deleteSmurf(props.smurf.id))}>❌</td>
        </tr>
    )
}

export default Smurf;
