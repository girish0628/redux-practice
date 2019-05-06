import { combineReducers } from 'redux';
import earthquakeReducer from './earthquakeReducer';


export default combineReducers({
    earthquakes: earthquakeReducer /** assign the earthquake data to store as earthquakes */

});