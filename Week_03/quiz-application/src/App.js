import React, { useState } from 'react';
import './App.css';
import swal from 'sweetalert';

function App() {

  const questions = [
    {
      id : 1 ,
      options : [
        {fruit:"banana", answer: true},
        {fruit:"lemon", answer: false},
        {fruit:"kiwi", answer: false},
        {fruit:"apple", answer: false}
        ]
    },
    {
      id : 2 ,
      options : [
        {fruit:"lime", answer: false},
        {fruit:"orange", answer: false},
        {fruit:"melon", answer: true},
        {fruit:"watermelon", answer: false}
        ]
    },
    {
      id : 3 ,
      options : [
        {fruit:"strawberry", answer: false},
        {fruit:"mango", answer: false},
        {fruit:"grape", answer: false},
        {fruit:"peach", answer: true}
        ]
    },
    {
      id : 4 ,
      options : [
        {fruit:"pineapple",answer: false},
        {fruit:"fig", answer: true},
        {fruit:"blachberry", answer: false},
        {fruit:"apple", answer: false}
        ]
    },
    {
      id : 5 ,
      options : [
        {fruit:"date",answer: true},
        {fruit:"poire", answer: false},
        {fruit:"kiwi", answer: false},
        {fruit:"pineapple", answer: false}
        ]
    },{
      id : 6 ,
      options : [
        {fruit:"banana", answer: true},
        {fruit:"lemon", answer: false},
        {fruit:"kiwi", answer: false},
        {fruit:"apple", answer: false}
        ]
    },
    {
      id : 7 ,
      options : [
        {fruit:"lime", answer: false},
        {fruit:"orange", answer: false},
        {fruit:"melon", answer: true},
        {fruit:"watermelon", answer: false}
        ]
    },
    {
      id : 8 ,
      options : [
        {fruit:"strawberry", answer: false},
        {fruit:"mango", answer: false},
        {fruit:"grape", answer: false},
        {fruit:"peach", answer: true}
        ]
    },
    {
      id : 9 ,
      options : [
        {fruit:"pineapple",answer: false},
        {fruit:"fig", answer: true},
        {fruit:"blachberry", answer: false},
        {fruit:"apple", answer: false}
        ]
    },
    {
      id : 10 ,
      options : [
        {fruit:"date",answer: true},
        {fruit:"poire", answer: false},
        {fruit:"kiwi", answer: false},
        {fruit:"pineapple", answer: false}
        ]
    }
  ];


 const [currentQuestion, setCurrentQuestion] = useState(0);
 const [correctAnswer, setCorrectAnswer] = useState(0);
 const [falseAnswer, setFalseAnswer] = useState(0);

 
 const nextQuestion = () => {
  const nextQuestion = currentQuestion + 1;
  if(nextQuestion < questions.length ){
    setCurrentQuestion(nextQuestion)
  }
 };

 const handleAnswer = (answer)=>{
  if(answer === true){
    swal("Good job!", "Tebrikler BILDINIZ!", "success");
    const correctScore = correctAnswer +1;
    setCorrectAnswer(correctScore)
  }else {
    swal("Sorry!", "Uzgunum BILEMEDINIZ! Diger soruya geciniz", "error");
    const falseScore = falseAnswer +1;
    setFalseAnswer(falseScore)
  }
};



  return (
  
    <div className="App">
      <div className='header'>WORD CARD QUIZ</div>
      <button onClick={nextQuestion}className="next">NEXT</button>
      <div className='number-of-question'>QUESTION {currentQuestion +1}</div>
      <div className='option-part'>
         {questions[currentQuestion].options.map(question => <button key={question.id} onClick={()=>handleAnswer(question.answer)}className='options'>{question.fruit}</button> )}
      </div>
      <div className='true-score'>True Score {correctAnswer}</div>
      <div className='false-score'>False Score {falseAnswer}</div>
    </div>
  
  );
}

export default App;
