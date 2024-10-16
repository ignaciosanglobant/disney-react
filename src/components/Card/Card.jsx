import Chevron from "../Chevron/Chevron";
import "./style.css";

const Card = ({name, location, type, image, handleChange, index}) => {
  return (
    <div className="container">
      {index === 0 ? '' : <Chevron direction="left" action={handleChange} />}
      <img
        src={image}
        alt="character image"
      />
      <div className="data">
        <h1>{name}</h1>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Type</strong> {type}
        </p>
      </div>
      <Chevron direction='right' action={handleChange}/>
    </div>
  );
};

export default Card;
