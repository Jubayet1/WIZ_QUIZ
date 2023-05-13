import React from "react";
import { Link } from "react-router-dom";

const HomeTitleCard = ({ info }) => {
  const { id, logo, name } = info;
  return (
    <div>
      <Link to={`/quiz/${id}`}>
        <img src={logo} alt="" />
        <Link to={`/quiz/${id}`}>
          <h1>{name}</h1>
        </Link>
      </Link>
    </div>
  );
};

export default HomeTitleCard;
