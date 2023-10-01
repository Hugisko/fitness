import "./bodyPart.css";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <a
      className={`${
        bodyPart === item ? "bodyPart-card active" : "bodyPart-card"
      }`}
      href="#exercises"
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img src={Icon} alt="dumbbell" />
      <p>{item}</p>
    </a>
  );
};

export default BodyPart;
