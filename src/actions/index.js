import config from '../config'
import { GET_EARTHQUAKEDATA} from './types';

//Make API request for the earthquake data and send to reducer
export const fetchEarthQuakeData = () => async dispatch=>{
        const response = await config.get('/summary/all_hour.geojson');
        dispatch({
            type: GET_EARTHQUAKEDATA,
            payload: response.data
        });
}   


