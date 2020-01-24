import React from 'react';
import { useSelector } from 'react-redux';

import Smurf from './Smurf';

const SmurfList = () => {
    const smurfs = useSelector(state => state.getSmurfs.smurfs)

    return (
    <table className="smurf-list">
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Weight</th>
        </tr>
            {smurfs.map(smurf => (
                <Smurf 
                smurf={smurf}
                key={smurf.id}
                />
            ))}
    </table>
    )
}

export default SmurfList