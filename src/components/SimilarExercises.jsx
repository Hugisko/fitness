import "./similarExercises.css";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <div className="similartExercises__container" id="similarExercises">
    <p className="targetMuscleExercises__title">
      Similar <span>Target Muscle</span> exercises
    </p>
    <div className="targetMuscleExercises__container">
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </div>
    <p className="equipmentExercises__title">
      Similar <span>Equipment</span> exercises
    </p>
    <div className="equipmentExercises__container">
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </div>
  </div>
);

export default SimilarExercises;
