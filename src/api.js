import axios from 'axios'
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default async function getFilm(fetchUrl, usrparams) {

    // const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
    const url = '/trending/movie/day';
    const API_TOKEN = import.meta.env.VITE_REACT_API_TOKEN

    const options = {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            Accept: 'application/json'
        },
        language: 'en-US',
        ...usrparams
    };
    const result = await axios.get(fetchUrl ?? url, options)
    console.log("🚀 ~ getFilm ~ result:", result)

    return result;
}

