import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf } from '../actions/deleteSmurf';

const SmurfList = (props) => {
    return (
        <div>
            {props.smurfs.map(smurf => (
                <div>
                <p>{smurf.name}</p>
                <button onClick={() => props.deleteSmurf(smurf.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        smurfs: state.getSmurfs.smurfs
    }
}
export default connect(mapStateToProps, {deleteSmurf})(SmurfList)