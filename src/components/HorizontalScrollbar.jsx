import BodyPart from "./BodyPart";
import "./horizontalScrollbar.css";
import { useEffect, useRef, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import {BsArrowLeftCircleFill} from 'react-icons/bs';
import {BsArrowRightCircleFill} from 'react-icons/bs';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  const scrollRef = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);

  const getScrollValue = () => {
    const gap_value = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--scroll_padding_value"));
    const width_value =  scrollRef.current.offsetWidth;
    const value = gap_value + width_value;
    setScrollValue(value);
  }

  useEffect(()=>{
    getScrollValue();
  },[])

  useEffect(() => {
    scrollRef.current.scrollLeft = 0;
    window.addEventListener("resize", getScrollValue);
    return () => {
      window.removeEventListener("resize", getScrollValue);
    };
  }, [scrollValue]);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= parseInt(scrollValue);
    } else {
      scrollRef.current.scrollLeft += parseInt(scrollValue);
    }
  };

  return (
    <div className="scrollMenu">
      <button onClick={() => scroll("left")} className="left-arrow">
        <BsArrowLeftCircleFill />
      </button>
      <div className="scrollMenu__container" ref={scrollRef}>
        {data.map((item) => (
          <div
            className="exercise__category"
            key={item.id || item}
            title={item.id || item}
            itemID={item.id || item}
          >
            {isBodyParts ? (
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </div>
        ))}
      </div>
      <button onClick={() => scroll("right")} className="right-arrow">
        <BsArrowRightCircleFill />
      </button>
    </div>
  );
};

export default HorizontalScrollbar;
