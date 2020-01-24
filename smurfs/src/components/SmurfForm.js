import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../actions/postSmurf';
import { getSmurfs } from '../actions/getSmurfs';

const SmurfForm = (props) => {
    
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: ''
    })
    useEffect(() => {
        props.getSmurfs()
    }, [smurf])
    
    const handleSubmit = event => {
        event.preventDefault();
        props.postSmurf(smurf);
        setSmurf({
            name: '',
            age: '',
            height: '',
            id: ''
        })
    }
    const handleChange = event => {
        setSmurf({
            ...smurf,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <th>
                        <label>Name</label>
                    </th>
                    <th>
                        <label>Age</label>
                    </th>
                    <th>
                        <label>Height</label>
                    </th>
                </tr>
                <tr>
                    <td>
                        <input 
                        onChange={handleChange}
                        name="name"
                        value={smurf.name}
                        />
                    </td>
                    <td>
                        <input 
                        onChange={handleChange}
                        name="age"
                        value={smurf.age}
                        />
                    </td>
                    <td>
                        <input 
                        onChange={handleChange}
                        name="height"
                        value={smurf.height}
                        />
                    </td>
                    <td className="button-container">
                        <button className="button">Add</button>
                    </td>
                </tr>
            </table>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.getSmurfs.smurfs
    }
}

export default connect(mapStateToProps, {postSmurf, getSmurfs})(SmurfForm);