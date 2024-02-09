import React from 'react';
import './App.css'

const questions = [
  {
    title: 'Cum - это ... ?',
    variants: ['Dick', 'Seamen', 'Fat cock'],
    correct: 1,
  },
  {
    title: 'Billy - это ... ',
    variants: ['Master of asses', 'Fisting God', 'Boss of the Gym'],
    correct: 2,
  },
  {
    title: 'Что идет после Fisting?',
    variants: [
      'Boy next door',
      'Ass we can',
      'three hundred bucks',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  const progress = Math.round(step / questions.length * 100); 
  return (
    <>
      <div className="progress">
        <div style={{ width: `${progress}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
          ))}
      </ul>
    </>
  );
}

function App() {
  const [step, SetStep] = React.useState(0);
  const [correct, SetCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => 
  {
    SetStep(step + 1);
    if (question.correct === index){
      SetCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? 
        (<Game step={step} question={question} onClickVariant={onClickVariant}/>): 
        (<Result correct={correct}/>)
      }
    </div>
  );
}

export default App;