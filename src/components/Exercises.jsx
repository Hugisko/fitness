import { useEffect, useRef, useState } from "react";
import { fetchData } from "../utils/fetchData";
import "./exercises.css";
import ExerciseCard from "../components/ExerciseCard";
import { Pagination } from "../utils/Pagination";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const scrollRef = useRef(null);
  const exercisesPerPage = 9;

  useEffect(() => {
    const fetchExercisesData = async () => {
      if (bodyPart === "all") {
        fetchData("/exercises", "1").then((exercisesData) => {
          setExercises(exercisesData);
        });
      } else {
        fetchData(`/exercises/bodyPart/${bodyPart}`, "1").then(
          (exercisesData) => {
            setExercises(exercisesData);
          }
        );
      }
    };

    fetchExercisesData();
    scrollRef.current.scrollIntoView();
  }, [bodyPart, currentPage]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const activeHandler = (clickedActive) => {
    setCurrentPage(parseInt(clickedActive));
  };

  return (
    <div id="exercises" className="exercises" ref={scrollRef}>
      <h3>Exercises</h3>
      <div className="exercises__container">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      {exercises.length > 9 && (
        <div className="pagination">
          <Pagination
            active={currentPage}
            size={Math.ceil(exercises.length / exercisesPerPage)}
            step={1}
            onClickHandler={activeHandler}
          />
        </div>
      )}
    </div>
  );
};

export default Exercises;
