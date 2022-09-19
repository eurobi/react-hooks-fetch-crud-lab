import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState();

  useEffect(() =>{
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then((questions) => setQuestions(questions))
  },[])

  function handleFormSubmit(newQuestion){
    fetch('http://localhost:4000/questions',{
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "prompt": newQuestion.prompt,
        "answers": [newQuestion.answer1, newQuestion.answer2, newQuestion.answer3 ,newQuestion.answer4],
        "correctIndex": newQuestion.correctIndex,
      }),
    })
    .then(r => r.json())
    .then((newQuestion) => setQuestions([...questions, newQuestion]))
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onFormSubmit={handleFormSubmit} /> : <QuestionList setQuestions={setQuestions} questions={questions} />}
    </main>
  );
}

export default App;
