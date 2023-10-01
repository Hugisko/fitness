import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import "./exerciseDetail.css";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  const fetchExercisesData = async () => {
    fetchData(`/exercises/exercise/${id}`, "1")
      .then((exerciseDetailData) => {
        setExerciseDetail(exerciseDetailData);
        return [
          exerciseDetailData.target,
          exerciseDetailData.equipment,
          exerciseDetailData.name,
        ];
      })
      .then(([target, equipment, name]) => {
        fetchData(`/exercises/target/${target}`, "1").then(
          (targetMuscleExercisesData) => {
            setTargetMuscleExercises(targetMuscleExercisesData);
          }
        );
        fetchData(`/exercises/equipment/${equipment}`, "1").then(
          (equimentExercisesData) => {
            setEquipmentExercises(equimentExercisesData);
          }
        );
        fetchData(`/search?query=${name} exercise`, "2").then(
          (exerciseVideosData) => {
            setExerciseVideos(exerciseVideosData.contents);
          }
        );
      });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <div className="exerciseDetail__container">
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </div>
  );
};

export default ExerciseDetail;
