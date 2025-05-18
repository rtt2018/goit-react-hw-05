import axios from 'axios'

export default async function getFilm() {

    const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

    const options = {
        headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDExZDlhYjJkZGI2ZjM1MjU3MmJhMGNmZGQyZDIwZSIsIm5iZiI6MTc0NzU2MzA5MC4xNTkwMDAyLCJzdWIiOiI2ODI5YjI1MjgwNjkyYmFiNTU2NDg4ODQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MERMQKU1q8PdZ_UJvAxUGvgmeviZu5DQVEWcG2H_grM'
        }
    };
    axios.get(url, options)
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

