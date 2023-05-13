import React from "react";
import { useLoaderData, Link } from "react-router-dom";

import QuizCard from "../../components/QuizCard/QuizCard";

const Quiz = () => {
  const { data } = useLoaderData();
  const questions = data.questions;
  return (
    <div>
      {questions.map((item) => (
        <QuizCard key={item.id} info={item} />
      ))}

      <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <Link to={"/"}>Home</Link>
      </button>
    </div>
  );
};

export default Quiz;
