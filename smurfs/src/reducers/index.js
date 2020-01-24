import { combineReducers } from 'redux';

import { getSmurfs } from './getSmurfs';
import { postSmurf } from './postSmurf';

const rootReducer = combineReducers({
    getSmurfs,
    postSmurf
})

export default rootReducer;