import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./App.css";
import Cards from "./Components/Card/Cards";
import { useEffect, useState } from "react";

function App() {
  // State to store the movies data
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchMovies = async () => {
      const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'e0a4f80e99msh6ffdb178daa736ep15984ejsndadfb78f61b0', // Replace with your actual RapidAPI key
          'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Log the data to understand its structure
        console.log("API Response:", data);

        // Update the state with the fetched data
        setMovies(data);
      } catch (error) {
        console.error("Error fetching the movies:", error);
      }
    };

    fetchMovies(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="Parent">
      <Header className="Header" />
      <div className="Cards-Wrapper">
        {movies.map((movie, index) => (
          <Cards
            key={movie.id} // Use a unique key from the movie data
            title={movie.title}
            rating={movie.rating}
            year={movie.year}
            description={movie.description} // Adding more props to show description
            image={movie.image} // Adding more props to show image
          />
        ))}
      </div>
      <Footer className="Footer" />
    </div>
  );
}

export default App;
