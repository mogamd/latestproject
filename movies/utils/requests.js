const API_KEY = process.env.API_KEY;

export default {
    fetchMovies: {
        title: 'Movies',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    }
}