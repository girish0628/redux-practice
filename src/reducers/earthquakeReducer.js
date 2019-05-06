import { GET_EARTHQUAKEDATA} from '../actions/types';

// Fetch the data and send to store
export default (state =[], action)=>{    
    switch(action.type){
        case GET_EARTHQUAKEDATA:
            return action.payload;
        default:
            return state;


    }
}