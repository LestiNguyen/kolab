import {combineReducers} from 'redux';
import reducers from './reducer/reducer';

const rootReducer = combineReducers({
    reducer:reducers
})
export default rootReducer