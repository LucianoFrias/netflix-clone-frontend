import axios from 'axios'


/* Base URL used for making requests.
 This URL is going to be combined with API endpoints to make
 HTTP Requests (POST, GET, PUT, DELETE)
*/
const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default axiosInstance;