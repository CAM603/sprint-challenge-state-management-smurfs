import React from 'react';
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions/deleteSmurf';

const Smurf = (props) => {

    return (
        <tr>
            <td>{props.smurf.name}</td>
            <td>{props.smurf.age}</td>
            <td>{props.smurf.height}</td>
            <td className="button-container" onClick={() => props.deleteSmurf(props.smurf.id)}>❌</td>
        </tr>
    )
}

export default connect(null, {deleteSmurf})(Smurf);
