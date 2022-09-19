import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ setQuestions, questions }) {

 let questionElements
  if(questions){
    questionElements = questions.map((question) => {
      return(

      <QuestionItem questions={questions} setQuestions={setQuestions} question={question}/>
      
      )
    })
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionElements}</ul>
    </section>
  );
}

export default QuestionList;
