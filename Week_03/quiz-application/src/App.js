import React from 'react';
import './App.css';
import cardList from './components/cardList.js'

function App() {

  const questions = [
    {
      id : 1 ,
      answer : "banana",
      options : [
        "banana", "lemon","kiwi","apple"]
    },
    {
      id : 2 ,
      answer : "lime",
      options : [
        "lime", "orange","melon","watermelon"]
    },
    {
      id : 3 ,
      answer : "grape",
      options : [
        "strawberry", "mango","peach","grape"]
    }, 
    {
      id : 4 ,
      answer : "fig",
      options : [
        "pineapple", "fig","blachberry","apple"]
    }, 
    {
      id : 5 ,
      answer : "poire",
      options : [
        "date", "poire","kiwi","pineapple"]
    },
  ];

  const handleAnswer = (answer)=>{
    if(answer === questions[0].answer){
      alert('vavv')
    }
  }
  return (
  
    <div className="App">
      <div className='header'>WORD CARD QUIZ</div>
      <button className="next">NEXT</button>
      <div className='number-of-question'>QUESTION 1</div>
      <div className='option-part'>
         {questions[0].options.map(question => <button onClick={handleAnswer({question})}className='options'>{question}</button> )}
      </div>
      <div className='true-score'>True Score 1</div>
      <div className='false-score'>False Score 1</div>
    </div>
  
  );
}

export default App;
