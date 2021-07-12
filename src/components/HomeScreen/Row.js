import React,{ useState,useEffect} from 'react'
import './Row.css'
import axios from "../../axios";
import Youtube from "react-youtube";
import YTSearch from "youtube-api-search";

const base_url = "https://image.tmdb.org/t/p/original/";
const youtube_api_key="AIzaSyAWPUN4oAHQpUUqqSRZTQj7lbtQODEvDMQ"
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

      // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        // if [], run once when the row loads, and don't run it again
        async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
        autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        console.log(movie)
        if(trailerUrl){
            setTrailerUrl("")
        }
        else{
            YTSearch({key: youtube_api_key, term: movie.name}, (videos) => {
                //do something with videos!
                    console.log(videos);
                    setTrailerUrl(videos[0].id.videoId)
                })
        }

    };
    return (
        <div className="row">
            <h2>{title}</h2>
    
            <div className="row-posters">
            {movies.map((movie) => (
                <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
                />
            ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
