import React, {useEffect, useState} from "react";
import "./Home.scss";
import axios from "axios";

const key = '5316f94b0a82460f632ac35ffed406fa';
const moviesUrl = 'https://api.themoviedb.org/3/movie';
const popular = 'popular';
const upcoming = 'upcoming';
const latest = 'now_playing';
const top_rated = 'top_rated';
const Card = ({ image }) => <img src={image} className="card" alt="cover" />;
const imgUrl = "https://image.tmdb.org/t/p/original";
const Row = ({
  title,
  arr = [],
}) => (
  <div className="row">
    <h2>{title}</h2>

    <div className="cols">
      {arr.map((item, index) => (
        <Card key={index} image={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, settopRatedMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  useEffect(() => {

    const fetchPopular = async ()=>{
      const { data: {results}} = await axios.get(`${moviesUrl}/${popular}?api_key=${key}&language=en-US&page=1`);
      setPopularMovies(results);
    }

    const fetchtopRated = async ()=>{
      const { data: {results}} = await axios.get(`${moviesUrl}/${top_rated}?api_key=${key}&language=en-US&page=1`);
      settopRatedMovies(results);
    }
    
    const fetchupcoming = async ()=>{
      const { data: {results}} = await axios.get(`${moviesUrl}/${upcoming}?api_key=${key}&language=en-US&page=1`);
      setUpcomingMovies(results);
    }
    
    const fetchLatest = async ()=>{
      const { data: {results}} = await axios.get(`${moviesUrl}/${latest}?api_key=${key}&language=en-US&page=1`);
      setLatestMovies(results);
    }

    fetchPopular();
    fetchupcoming();
    fetchtopRated();
    fetchLatest();
});
  

  return (
    <div className="home">
      <div className="banner" style={{
        backgroundImage: `url(${imgUrl}/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg)`
      }}>
        
      </div>

      <Row title={"Popular on Netflix"} arr={popularMovies} />
      <Row title={"Top - Rated"} arr={topRatedMovies} />
      <Row title={"Latest"} arr={latestMovies} />
      <Row title={"Movies"} arr={upcomingMovies} />
      
    </div>
  );
};

export default Home;
