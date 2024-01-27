"use client";
import { useState, useEffect, createContext } from "react";
import { AnimatePresence } from "framer-motion";
import ButtonFilters from "./ButtonFilters";
import Movies from "./Movies";
import SkillsFilters from "./SkillsFilters";
import SkillsCard from "./SkillsCard";

// Create context
export const MovieContext = createContext();
const TestSkills = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState([]);

  const fetchPopularMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${"7f4278b49b0dad56afbecf67d0b4a002"}&language=en-US&page=1`
    );
    const movies = await response.json();
    setPopularMovies(movies.results);
    setFilteredMovie(movies.results);
    console.log(movies.results);
  };

  useEffect(() => {
    fetchPopularMovie();
  }, []);

  const value = {
    popularMovies,
    filteredMovie,
    setFilteredMovie,
  };

  return (
    <MovieContext.Provider value={value}>
      <div className="bg-secondary container">
        <SkillsFilters />
        <div className="flex flex-wrap items-center justify-center gap-8">
          <SkillsCard />
        </div>
        {/*  <ButtonFilters />

        <div className="image-container">
          <AnimatePresence>
            <Movies />
          </AnimatePresence>
        </div> */}
      </div>
    </MovieContext.Provider>
  );
};

export default TestSkills;
