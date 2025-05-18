import axios from 'axios'

export default async function getFilm() {

    const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
    const API_TOKEN = import.meta.env.VITE_REACT_API_TOKEN

    const options = {
        headers: {
            Authorization: API_TOKEN,
        }
    };
    axios.get(url, options)
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

