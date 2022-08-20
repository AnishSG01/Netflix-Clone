const API_KEY = "5316f94b0a82460f632ac35ffed406fa";

// ${moviesUrl}/${popular}?api_key=${key}&language=en-US&page=1
// const moviesUrl = 'https://api.themoviedb.org/3';
const requests = {
    fetchPopular: `/movie/popular?api_key=${key}&language=en-US&page=1`,
    fetchUpcomig: `/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    fetchNow_Playing: `/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    fetchTop_Rated: `/movie/top_rated?api_key=${key}&language=en-US&page=1`
}

export default requests;