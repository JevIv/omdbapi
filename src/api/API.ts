import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '?apikey=d517747d';
const axiosInstance = axios.create(configOMB);

export const API = {
    searchMoviesByTitle: (searchString: string) => {
        const query = `${key}&s=${searchString}`;
        return axiosInstance.get(query)
            .then((response) => response.data);
    },
    getMovieDetails: (movie: string) => {
        const query = `${key}&i=${movie}`;
        return axiosInstance.get(query)
            .then((response) => response.data);
    }
};