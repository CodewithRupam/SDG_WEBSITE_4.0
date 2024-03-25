import React from 'react'
import { useState } from 'react';
import Footer from './footer';
import Quiz from '../img/quiz_background.png'
import { motion } from "framer-motion"
export default function QuestionList() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'Which organisation founded SDG?',
      options: ['UN', 'SAARC', 'NATO', 'BRICS'],
      correctAnswer: 'UN',
      selectedAnswer: ''
    },
    {
      id: 2,
      question: 'By which year SDG goals must be achived',
      options: ['2040', '2029', '2026', '2030'],
      correctAnswer: '2030',
      selectedAnswer: ''
    },
    {
      id: 3,
      question: 'Goal of SDG 13',
      options: ['Quality education', 'Zero hunger', 'Climate action', 'End of poverty'],
      correctAnswer: 'Climate action',
      selectedAnswer: ''
    },
    {
      id: 4,
      question: 'How many goals SDG has?',
      options: ['17', "12", "20", "18"],
      correctAnswer: '17',
      selectedAnswer: ''
    },
    {
      id: 5,
      question: 'Target of Paris agreement',
      options: ["To keep global temperatures well below 2C", "To make sure people use renewable resources", "To make sure that all SDG goals are achieved", "None of these"],
      correctAnswer: 'To keep global temperatures well below 2C',
      selectedAnswer: ''
    },
    {
      id: 6,
      question: 'Full form of SDG',
      options: ["Sustainable Development Goals", "Social Development Governance", "Sustainable Development Guidelines", "Systematic Development Goals"],
      correctAnswer: 'Sustainable Development Goals',
      selectedAnswer: ''
    },
    {
      id: 7,
      question: 'Which of the following is NOT a key objective of SDG 13?',
      options: ["Reduce greenhouse gas emissions", "Strengthen resilience and adaptive capacity to climate-related disasters", "Promote sustainable agriculture", " Integrate climate change measures into policies and planning"],
      correctAnswer: "Integrate climate change measures into policies and planning",
      selectedAnswer: ''
    }
  ]);

  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (questionId, selectedOption) => {
    const updatedQuestions = questions.map(question =>
      question.id === questionId ? { ...question, selectedAnswer: selectedOption } : question
    );
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  return (
    <><div className="main6" style={{backgroundImage: `url(${Quiz})`}}>
      <br /><br /><br /><br />
      <h1 style={{ fontFamily: 'Times New Roman', textAlign: 'center', WebkitTextStroke: '1px green', color: 'orange' }}>Welcome to Planet protectors Quiz</h1><br /><br />
      <p style={{ textAlign: 'center' }}>Total questions: 7</p>
      {questions.map(question => (
        <Question key={question.id} question={question} handleOptionSelect={handleOptionSelect} />
      ))}
      <br /><br />
      <div className="main7" style={{ width: "60%", margin: 'auto auto' }}>
        <motion.button whileHover={{scale: 0.9}} onClick={handleSubmit} style={{ height: '60px', width: '200px', backgroundColor: 'violet', border: '1px solid black', borderRadius: '50px', color: 'white', margin: 'auto auto' }}>Submit</motion.button><br /><br /><br />

        {showResult && <Result questions={questions} />}
        <br />
      </div>
      <Footer />
    </div>

    </>
  );
}

function Question({ question, handleOptionSelect }) {
  const { id, question: questionText, options, selectedAnswer } = question;

  return (
    <>
      <div className="main5">
        <br /><br /><br />
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{scale: 0.9}} className="Question"><br />
          <h2 style={{ fontFamily: 'Times New Roman', textAlign: 'center', color: 'indigo', width: '100%' }} className='name2'>{questionText}</h2><br />
          <div className="options">
            {options.map((option, index) => (
              <div key={index} className={`option ${selectedAnswer === option ? 'selected' : ''}`} onClick={() => handleOptionSelect(id, option)}>
                {option}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

function Result({ questions }) {
  const totalQuestions = questions.length;
  const correctAnswers = questions.filter(question => question.selectedAnswer === question.correctAnswer).length;
  const score = (correctAnswers / totalQuestions) * 100;
  const roundedScore = score.toFixed(2);

  return (
    <motion.div whileHover={{scale: 0.9}} className="Result"><br /><br /><br /><br />
      <h2>Result</h2>
      <p>Total Questions: {totalQuestions}</p>
      <p>Correct Answers: {correctAnswers}</p>
      <p>Score: {roundedScore}%</p>
    </motion.div>
  );
}
