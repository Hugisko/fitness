import "./heroBanner.css";
import HeroBannerImage from "../assets/images/bg.jpg";

const HeroBanner = () => {
  return (
    <div className="heroBanner__container">
      <div className="heroBanner__container-text">
        <p className="heroBanner__title">Fitness App</p>
        <p className="heroBanner__subtitle">
          Pain & Gain
        </p>
        <p className="heroBanner__info">This platform helps you achieve your fitness goals with personalized workouts. Whether you want to lose weight, build muscle, or improve your health.</p>
        <p className="heroBanner__info">We provide you tons of exercises to choose from.</p>
      </div>
      <p className="heroBanner__bg">Exercise</p>
      <div className="heroBanner__img-container">
      <img
        src={HeroBannerImage}
        className="hero-banner-img"
        alt="hero banner"
      />
      </div>
    </div>
  );
};

export default HeroBanner;
