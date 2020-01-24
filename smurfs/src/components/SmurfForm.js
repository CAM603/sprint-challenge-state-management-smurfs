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
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                onChange={handleChange}
                name="name"
                value={smurf.name}
                />
                <label>Age</label>
                <input 
                onChange={handleChange}
                name="age"
                value={smurf.age}
                />
                <label>Height</label>
                <input 
                onChange={handleChange}
                name="height"
                value={smurf.height}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.getSmurfs.smurfs
    }
}

export default connect(mapStateToProps, {postSmurf, getSmurfs})(SmurfForm);