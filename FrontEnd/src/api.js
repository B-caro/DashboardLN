// Importamos Axios 
import axios from 'axios';
 
// Definimos la ruta local del servidor Vue JS 
export default axios.create({
    baseURL: 'http://192.168.55.53:8000/'
});