import './detail.css';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className='detail__container'>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <div className="detail__card">
        <p className="detail__card-title">
          {name}
        </p>
        <p className="detail__card-desc">
          Exercises keep you strong.
          <br />
          <span>{name}</span> is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
        </p>
        {extraDetail?.map((item, index) => (
          <div className='detail__card-extra' key={index}>
            <button>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </button>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
