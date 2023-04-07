import React from "react";
import shuffleArray from "../../utils/shuffleArray";
import { useDispatch } from "react-redux";
import { givenQuizAns } from "../../features/quiz/quizSlice";

const SingleQuiz = ({ quiz, index }) => {
  const { id, question, options } = quiz || {};

  const correctAnswer = options[0]?.option;

  let ansOptions = shuffleArray([
    options[0].option,
    options[1].option,
    options[2].option,
    options[3].option,
  ]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const givenAns = e.target.value;
    let mark;
    if (correctAnswer === givenAns) mark = 5;
    else mark = 0;
    dispatch(
      givenQuizAns({
        id,
        mark,
      })
    );
  };

  return (
    <div className="quiz">
      <h4 className="question">
        Quiz {index + 1} - {question}
      </h4>
      <form className="quizOptions">
        {/* <!-- Option 1 --> */}
        <label htmlFor={`option1_q${id}`}>
          <input
            type="radio"
            name="option"
            id={`option1_q${id}`}
            value={ansOptions[0]}
            onChange={handleChange}
          />
          {ansOptions[0]}
        </label>

        {/* <!-- Option 2 --> */}
        <label htmlFor={`option2_q${id}`}>
          <input
            type="radio"
            name="option"
            id={`option2_q${id}`}
            value={ansOptions[1]}
            onChange={handleChange}
          />{" "}
          {ansOptions[1]}
        </label>

        {/* <!-- Option 3 --> */}
        <label htmlFor={`option3_q${id}`}>
          <input
            type="radio"
            name="option"
            id={`option3_q${id}`}
            value={ansOptions[2]}
            onChange={handleChange}
          />
          {ansOptions[2]}
        </label>

        {/* <!-- Option 4 --> */}
        <label htmlFor={`option4_q${id}`}>
          <input
            type="radio"
            name="option"
            id={`option4_q${id}`}
            value={ansOptions[3]}
            onChange={handleChange}
          />{" "}
          {ansOptions[3]}
        </label>
      </form>
    </div>
  );
};

export default React.memo(SingleQuiz);
