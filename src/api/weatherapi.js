import axios from 'axios';
import { weatherurl } from '../apilinks/links.js';
export const fetchData = async () => {
    try {
        const response = await axios.get(weatherurl);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return null;
    }
}
