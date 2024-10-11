import Chevron from "../Chevron/Chevron";
import "./style.css";

const Card = () => {
  return (
    <div className="container">
      {/* <Chevron direction="left" /> */}
      <img
        src="https://rickandmortyapi.com/api/character/avatar/361.jpeg"
        alt="character image"
      />
      <div className="data">
        <h1>Toxic Rick</h1>
        <p>
          <strong>Location:</strong> Earth
        </p>
        <p>
          <strong>Type</strong> Rick&apos;s Toxic Side
        </p>
      </div>
      {/* <Chevron /> */}
    </div>
  );
};

export default Card;
