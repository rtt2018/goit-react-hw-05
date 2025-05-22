import axios from 'axios'

export default async function getFilm(fetchUrl, usrparams) {

    // const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const API_TOKEN = import.meta.env.VITE_REACT_API_TOKEN

    const options = {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            Accept: 'application/json'
        }
    };
    const result = await axios.get(fetchUrl ?? url, { ...options, ...usrparams })

    return result;
}

