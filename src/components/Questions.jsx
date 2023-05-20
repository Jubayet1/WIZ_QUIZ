import React from "react";

function Questions() {
  const [questions, setQuestions] = React.useState([]);
  const [questionsAndAnswers, setQuestionsAndAnswers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
        setQuestionsAndAnswers(
          data.results.map((questionObject) => {
            return {
              question: questionObject.question,
              shuffledAnswers: shuffle([
                ...questionObject.incorrect_answers,
                questionObject.correct_answer,
              ]),
              correctAnswer: questionObject.correct_answer,
              selectedAnswer: "",
            };
          })
        );
      });
  }, []);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <div>
      <h1>this is questions page</h1>
    </div>
  );
}

export default Questions;
