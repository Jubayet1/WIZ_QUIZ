import React from "react";

const QuizCard = ({ info }) => {
  //   console.log(info.options);
  const options = info.options;
  const question = info.question;
  let firstReplace = question.replace("<p>", "");
  let secondReplace = firstReplace.replace("</p>", "");
  return (
    <div>
      <h1>
        {secondReplace}
        {options.map((op) => (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            {op}
          </button>
        ))}
      </h1>
    </div>
  );
};

export default QuizCard;
