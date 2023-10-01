import { useEffect, useState } from "react";
import "./searchExercises.css";
import { fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchData("/exercises/bodyPartList", "1").then((bodyPartsData) => {
      setBodyParts(["all", ...bodyPartsData]);
      setLoading(false);
    });
  }, []);

  const handleSearch = async () => {
    if (search) {
      fetchData("/exercises", "1").then((exerciseData) => {
        const searchedExercises = exerciseData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
        );
        setSearch("");
        setExercises(searchedExercises);
      });
    }
  };

  return (
    <div className="searchExercises__container">
      <p className="searchExercises__title">Let's Explore New Exercises</p>
      <div className="searchExersices__search">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="exercises__body-parts__container">
        {loading ? (
          <Loader />
        ) : (
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            isBodyParts
          />
        )}
      </div>
    </div>
  );
};

export default SearchExercises;
