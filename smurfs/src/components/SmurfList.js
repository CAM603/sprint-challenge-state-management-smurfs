import React from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';

const SmurfList = (props) => {

    return (
    <table className="smurf-list">
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Weight</th>
        </tr>
            {props.smurfs.map(smurf => (
                <Smurf 
                smurf={smurf}
                key={smurf.id}
                />
            ))}
    </table>
    )
}
const mapStateToProps = state => {
    return {
        smurfs: state.getSmurfs.smurfs
    }
}
export default connect(mapStateToProps)(SmurfList)