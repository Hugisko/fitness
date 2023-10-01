import "./exerciseCard.css";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div className="exercise-card-content">
        <div className="exercise-card-buttons">
          <button className="exercise-card-bodyPart">{exercise.bodyPart}</button>
          <button className="exercise-card-target">{exercise.target}</button>
        </div>
        <p>{exercise.name}</p>
      </div>
 
    </Link>
  );
};

export default ExerciseCard;
