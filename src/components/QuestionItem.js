import React from "react";

function QuestionItem({ setQuestions, question, questions }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleDelete(e){
    const questionId = e.target.id
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => setQuestions([...questions].filter((item) => item.id.toString() !== questionId.toString())))
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleChange(e){
    console.log(e.target.id)
    fetch(`http://localhost:4000/questions/${e.target.id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        correctIndex: e.target.value
      })
    })
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select id={question.id} onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button id={question.id} onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
