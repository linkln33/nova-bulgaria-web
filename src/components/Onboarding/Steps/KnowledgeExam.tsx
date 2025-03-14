import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { FaChevronLeft, FaChevronRight, FaCheck, FaForward } from 'react-icons/fa';

interface KnowledgeExamProps {
  onComplete: (score: number, passed: boolean, answers: Record<string, string>, earnedBGL: number) => void;
  onSkipToMinting: () => void;
}

interface Question {
  id: string;
  category: string;
  text: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  bglReward: number;
}

const KnowledgeExam: React.FC<KnowledgeExamProps> = ({ onComplete, onSkipToMinting }) => {
  const { t } = useLanguage();
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds
  const [earnedBGL, setEarnedBGL] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 5;

  // Define exam questions
  const questions: Question[] = [
    {
      id: 'q1',
      category: t('onboarding.exam.category.history', 'History & Culture'),
      text: t('onboarding.exam.q1', 'What year was Bulgaria founded as a state?'),
      options: [
        { id: 'a', text: '681' },
        { id: 'b', text: '972' },
        { id: 'c', text: '1204' },
        { id: 'd', text: '1517' }
      ],
      correctAnswer: 'a',
      bglReward: 5
    },
    {
      id: 'q2',
      category: t('onboarding.exam.category.history', 'History & Culture'),
      text: t('onboarding.exam.q2', 'What is the name of the first Bulgarian alphabet?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q2.a', 'Cyrillic') },
        { id: 'b', text: t('onboarding.exam.q2.b', 'Glagolitic') },
        { id: 'c', text: t('onboarding.exam.q2.c', 'Latin') },
        { id: 'd', text: t('onboarding.exam.q2.d', 'Greek') }
      ],
      correctAnswer: 'b',
      bglReward: 5
    },
    {
      id: 'q3',
      category: t('onboarding.exam.category.history', 'History & Culture'),
      text: t('onboarding.exam.q3', 'Who were the creators of the Cyrillic alphabet?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q3.a', 'The Bogomils') },
        { id: 'b', text: t('onboarding.exam.q3.b', 'Saints Cyril and Methodius') },
        { id: 'c', text: t('onboarding.exam.q3.c', 'The Thracians') },
        { id: 'd', text: t('onboarding.exam.q3.d', 'Tsar Simeon I') }
      ],
      correctAnswer: 'b',
      bglReward: 5
    },
    {
      id: 'q4',
      category: t('onboarding.exam.category.history', 'History & Culture'),
      text: t('onboarding.exam.q4', 'What is Bulgaria\'s national flower?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q4.a', 'Rose') },
        { id: 'b', text: t('onboarding.exam.q4.b', 'Lavender') },
        { id: 'c', text: t('onboarding.exam.q4.c', 'Sunflower') },
        { id: 'd', text: t('onboarding.exam.q4.d', 'Tulip') }
      ],
      correctAnswer: 'a',
      bglReward: 5
    },
    {
      id: 'q5',
      category: t('onboarding.exam.category.history', 'History & Culture'),
      text: t('onboarding.exam.q5', 'What traditional Bulgarian holiday is celebrated on March 1st?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q5.a', 'Baba Marta') },
        { id: 'b', text: t('onboarding.exam.q5.b', 'Kukeri Festival') },
        { id: 'c', text: t('onboarding.exam.q5.c', 'Trifon Zarezan') },
        { id: 'd', text: t('onboarding.exam.q5.d', 'Liberation Day') }
      ],
      correctAnswer: 'a',
      bglReward: 5
    },
    {
      id: 'q6',
      category: t('onboarding.exam.category.history', 'History & Culture'),
      text: t('onboarding.exam.q6', 'Which mountain range runs through the center of Bulgaria?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q6.a', 'Carpathian Mountains') },
        { id: 'b', text: t('onboarding.exam.q6.b', 'Balkan Mountains') },
        { id: 'c', text: t('onboarding.exam.q6.c', 'Rhodope Mountains') },
        { id: 'd', text: t('onboarding.exam.q6.d', 'Pirin Mountains') }
      ],
      correctAnswer: 'b',
      bglReward: 5
    },
    {
      id: 'q7',
      category: t('onboarding.exam.category.history', 'History & Culture'),
      text: t('onboarding.exam.q7', 'What is Bulgaria\'s traditional musical instrument?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q7.a', 'Bouzouki') },
        { id: 'b', text: t('onboarding.exam.q7.b', 'Balalaika') },
        { id: 'c', text: t('onboarding.exam.q7.c', 'Gaida') },
        { id: 'd', text: t('onboarding.exam.q7.d', 'Accordion') }
      ],
      correctAnswer: 'c',
      bglReward: 5
    },
    {
      id: 'q8',
      category: t('onboarding.exam.category.governance', 'Governance & Economy'),
      text: t('onboarding.exam.q8', 'What is the currency of Bulgaria?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q8.a', 'Euro') },
        { id: 'b', text: t('onboarding.exam.q8.b', 'Lev') },
        { id: 'c', text: t('onboarding.exam.q8.c', 'Lira') },
        { id: 'd', text: t('onboarding.exam.q8.d', 'Dinar') }
      ],
      correctAnswer: 'b',
      bglReward: 5
    },
    {
      id: 'q9',
      category: t('onboarding.exam.category.governance', 'Governance & Economy'),
      text: t('onboarding.exam.q9', 'What is the capital city of Bulgaria?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q9.a', 'Varna') },
        { id: 'b', text: t('onboarding.exam.q9.b', 'Plovdiv') },
        { id: 'c', text: t('onboarding.exam.q9.c', 'Sofia') },
        { id: 'd', text: t('onboarding.exam.q9.d', 'Burgas') }
      ],
      correctAnswer: 'c',
      bglReward: 5
    },
    {
      id: 'q10',
      category: t('onboarding.exam.category.governance', 'Governance & Economy'),
      text: t('onboarding.exam.q10', 'What is the form of government in Bulgaria?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q10.a', 'Constitutional Monarchy') },
        { id: 'b', text: t('onboarding.exam.q10.b', 'Presidential Republic') },
        { id: 'c', text: t('onboarding.exam.q10.c', 'Parliamentary Republic') },
        { id: 'd', text: t('onboarding.exam.q10.d', 'Federal Republic') }
      ],
      correctAnswer: 'c',
      bglReward: 5
    },
    {
      id: 'q11',
      category: t('onboarding.exam.category.nova', 'NOVA BULGARIA'),
      text: t('onboarding.exam.q11', 'What is the main goal of NOVA BULGARIA?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q11.a', 'To create a new cryptocurrency') },
        { id: 'b', text: t('onboarding.exam.q11.b', 'To reform and modernize Bulgaria through blockchain technology') },
        { id: 'c', text: t('onboarding.exam.q11.c', 'To establish a new political party') },
        { id: 'd', text: t('onboarding.exam.q11.d', 'To promote Bulgarian tourism') }
      ],
      correctAnswer: 'b',
      bglReward: 5
    },
    {
      id: 'q12',
      category: t('onboarding.exam.category.nova', 'NOVA BULGARIA'),
      text: t('onboarding.exam.q12', 'What technology does NOVA BULGARIA use to ensure transparency?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q12.a', 'Artificial Intelligence') },
        { id: 'b', text: t('onboarding.exam.q12.b', 'Cloud Computing') },
        { id: 'c', text: t('onboarding.exam.q12.c', 'Blockchain Technology') },
        { id: 'd', text: t('onboarding.exam.q12.d', 'Quantum Computing') }
      ],
      correctAnswer: 'c',
      bglReward: 5
    },
    {
      id: 'q13',
      category: t('onboarding.exam.category.nova', 'NOVA BULGARIA'),
      text: t('onboarding.exam.q13', 'What is the name of NOVA BULGARIA\'s digital identity system?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q13.a', 'Digital Passport') },
        { id: 'b', text: t('onboarding.exam.q13.b', 'Blockchain ID') },
        { id: 'c', text: t('onboarding.exam.q13.c', 'NFT ID') },
        { id: 'd', text: t('onboarding.exam.q13.d', 'Crypto Identity') }
      ],
      correctAnswer: 'c',
      bglReward: 5
    },
    {
      id: 'q14',
      category: t('onboarding.exam.category.nova', 'NOVA BULGARIA'),
      text: t('onboarding.exam.q14', 'What is the name of NOVA BULGARIA\'s token?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q14.a', 'BulgarCoin') },
        { id: 'b', text: t('onboarding.exam.q14.b', 'NovaToken') },
        { id: 'c', text: t('onboarding.exam.q14.c', 'BGL') },
        { id: 'd', text: t('onboarding.exam.q14.d', 'LevCoin') }
      ],
      correctAnswer: 'c',
      bglReward: 5
    },
    {
      id: 'q15',
      category: t('onboarding.exam.category.nova', 'NOVA BULGARIA'),
      text: t('onboarding.exam.q15', 'What is the governance model of NOVA BULGARIA?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q15.a', 'Centralized Governance') },
        { id: 'b', text: t('onboarding.exam.q15.b', 'Decentralized Autonomous Organization (DAO)') },
        { id: 'c', text: t('onboarding.exam.q15.c', 'Traditional Corporate Structure') },
        { id: 'd', text: t('onboarding.exam.q15.d', 'Government Agency') }
      ],
      correctAnswer: 'b',
      bglReward: 5
    },
    {
      id: 'q16',
      category: t('onboarding.exam.category.nova', 'NOVA BULGARIA'),
      text: t('onboarding.exam.q16', 'What sector is NOT part of NOVA BULGARIA\'s focus areas?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q16.a', 'Education') },
        { id: 'b', text: t('onboarding.exam.q16.b', 'Healthcare') },
        { id: 'c', text: t('onboarding.exam.q16.c', 'Military') },
        { id: 'd', text: t('onboarding.exam.q16.d', 'Agriculture') }
      ],
      correctAnswer: 'c',
      bglReward: 5
    },
    {
      id: 'q17',
      category: t('onboarding.exam.category.nova', 'NOVA BULGARIA'),
      text: t('onboarding.exam.q17', 'What is the main purpose of the Lionheart Fund?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q17.a', 'To fund military operations') },
        { id: 'b', text: t('onboarding.exam.q17.b', 'To support political campaigns') },
        { id: 'c', text: t('onboarding.exam.q17.c', 'To finance infrastructure projects and social initiatives') },
        { id: 'd', text: t('onboarding.exam.q17.d', 'To provide loans to businesses') }
      ],
      correctAnswer: 'c',
      bglReward: 5
    },
    {
      id: 'q18',
      category: t('onboarding.exam.category.nova', 'NOVA BULGARIA'),
      text: t('onboarding.exam.q18', 'How can citizens participate in NOVA BULGARIA\'s governance?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q18.a', 'By voting on proposals through the DAO') },
        { id: 'b', text: t('onboarding.exam.q18.b', 'By electing representatives') },
        { id: 'c', text: t('onboarding.exam.q18.c', 'By paying membership fees') },
        { id: 'd', text: t('onboarding.exam.q18.d', 'By attending physical meetings') }
      ],
      correctAnswer: 'a',
      bglReward: 5
    },
    {
      id: 'q19',
      category: t('onboarding.exam.category.nova', 'NOVA BULGARIA'),
      text: t('onboarding.exam.q19', 'What is the primary benefit of using blockchain for governance?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q19.a', 'It\'s faster than traditional systems') },
        { id: 'b', text: t('onboarding.exam.q19.b', 'It\'s cheaper to maintain') },
        { id: 'c', text: t('onboarding.exam.q19.c', 'It provides transparency and immutability') },
        { id: 'd', text: t('onboarding.exam.q19.d', 'It requires less people to operate') }
      ],
      correctAnswer: 'c',
      bglReward: 5
    },
    {
      id: 'q20',
      category: t('onboarding.exam.category.nova', 'NOVA BULGARIA'),
      text: t('onboarding.exam.q20', 'What symbol represents NOVA BULGARIA?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q20.a', 'Eagle') },
        { id: 'b', text: t('onboarding.exam.q20.b', 'Lion') },
        { id: 'c', text: t('onboarding.exam.q20.c', 'Bear') },
        { id: 'd', text: t('onboarding.exam.q20.d', 'Wolf') }
      ],
      correctAnswer: 'b',
      bglReward: 5
    }
  ];

  // Check if all questions are answered
  const allQuestionsAnswered = questions.every(q => userAnswers[q.id]);

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResults) {
      handleSubmitExam();
    }
  }, [timeLeft, showResults]);

  // Handle selecting an answer
  const handleAnswerSelect = (questionId: string, answerId: string) => {
    // If user is changing an answer, check if they're removing a correct answer
    if (userAnswers[questionId] && userAnswers[questionId] === questions.find(q => q.id === questionId)?.correctAnswer) {
      setCorrectAnswersCount(prev => prev - 1);
      setEarnedBGL(prev => prev - (questions.find(q => q.id === questionId)?.bglReward || 0));
    }
    
    // Check if the new answer is correct
    const isCorrect = answerId === questions.find(q => q.id === questionId)?.correctAnswer;
    if (isCorrect) {
      setCorrectAnswersCount(prev => prev + 1);
      setEarnedBGL(prev => prev + (questions.find(q => q.id === questionId)?.bglReward || 0));
    }
    
    setUserAnswers({
      ...userAnswers,
      [questionId]: answerId
    });
  };

  // Navigate to next question
  const handleNextQuestion = () => {
    if (currentPage < Math.ceil(questions.length / questionsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Navigate to previous question
  const handlePrevQuestion = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Skip to NFT ID minting
  const handleSkipToMinting = () => {
    // Calculate score based on current answers
    let correctAnswers = 0;
    let calculatedEarnedBGL = 0;

    questions.forEach(question => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
        calculatedEarnedBGL += question.bglReward;
      }
    });

    const finalScore = Math.round((correctAnswers / questions.length) * 100);
    const passed = correctAnswers >= 3; // Only need 3 correct answers to pass

    setShowResults(true);
    
    // Call the onComplete callback with the results
    onComplete(finalScore, passed, userAnswers, calculatedEarnedBGL);
    
    // Call the skip to minting function
    onSkipToMinting();
  };

  // Submit exam
  const handleSubmitExam = () => {
    // Calculate score
    let correctAnswers = 0;
    let calculatedEarnedBGL = 0;

    questions.forEach(question => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
        calculatedEarnedBGL += question.bglReward;
      }
    });

    const finalScore = Math.round((correctAnswers / questions.length) * 100);
    const passed = correctAnswers >= 3; // Only need 3 correct answers to pass

    setShowResults(true);
    
    // Call the onComplete callback with the results
    onComplete(finalScore, passed, userAnswers, calculatedEarnedBGL);
  };

  return (
    <div className="exam-container">
      <div className="exam-header mb-8">
        <h2 className="step-title">{t('onboarding.exam.title', 'Knowledge Exam')}</h2>
        <p className="step-description">
          {t('onboarding.exam.description', 'This exam tests your knowledge about NOVA BULGARIA. For each correct answer, you\'ll earn 5 BGL. You only need 3 correct answers to proceed.')}
        </p>
        
        <div className="flex justify-between items-center mt-4 mb-6">
          <div className="text-sm text-gray-400">
            {t('onboarding.exam.answeredLabel', 'Answered')}: <span className="font-bold text-white">{Object.keys(userAnswers).length}</span>/{questions.length}
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm bg-[rgba(0,255,170,0.1)] px-3 py-1 rounded-full flex items-center border border-[rgba(0,255,170,0.3)]">
              <span className="mr-2">💰</span>
              <span className="font-mono text-[#00ffaa]">{earnedBGL} BGL</span>
            </div>
            <div className="text-sm bg-gray-800 px-3 py-1 rounded-full flex items-center">
              <span className="mr-2">⏱️</span>
              <span className={`font-mono ${timeLeft < 300 ? 'text-red-400' : 'text-white'}`}>{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
        
        <div className="exam-progress">
          <span className="text-sm font-bold">{currentPage * questionsPerPage + 1}</span>
          <div className="exam-progress-bar">
            <div 
              className="exam-progress-fill" 
              style={{ width: `${((currentPage * questionsPerPage + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <span className="text-sm font-bold">{questions.length}</span>
        </div>
      </div>
      
      <div className="question-container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage).map(question => (
            <div key={question.id} className="mb-6 p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700">
              <div className="question-category text-sm text-[#00ffaa]">{question.category}</div>
              <div className="question-text text-base font-bold mb-3">{question.text}</div>
              
              <div className="answer-options flex flex-col space-y-2">
                {question.options.map(option => (
                  <div 
                    key={option.id}
                    className={`answer-option p-2 rounded ${userAnswers[question.id] === option.id ? 'bg-[rgba(0,255,170,0.1)] border border-[rgba(0,255,170,0.3)]' : 'hover:bg-gray-700'}`}
                    onClick={() => handleAnswerSelect(question.id, option.id)}
                  >
                    <span className="answer-radio mr-2">
                      {userAnswers[question.id] === option.id ? (
                        <span className="w-3 h-3 inline-block rounded-full bg-[#00ffaa] border-2 border-[#00ffaa]"></span>
                      ) : (
                        <span className="w-3 h-3 inline-block rounded-full border-2 border-gray-400"></span>
                      )}
                    </span>
                    <span className="text-sm">{option.id.toUpperCase()}. {option.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <button 
          className="nav-button back-button"
          onClick={handlePrevQuestion}
          disabled={currentPage === 0}
        >
          <FaChevronLeft className="mr-2" />
          {t('onboarding.exam.previous', 'Previous')}
        </button>
        
        <div className="flex gap-4">
          {correctAnswersCount >= 3 && (
            <button 
              className="nav-button skip-button flex items-center"
              onClick={handleSkipToMinting}
            >
              {t('onboarding.exam.skipToMinting', 'Skip to Minting ID')}
              <FaForward className="ml-2" />
            </button>
          )}
          
          {currentPage < Math.ceil(questions.length / questionsPerPage) - 1 ? (
            <button 
              className="nav-button next-button"
              onClick={handleNextQuestion}
            >
              {t('onboarding.exam.next', 'Next')}
              <FaChevronRight className="ml-2" />
            </button>
          ) : (
            <button 
              className={`nav-button ${allQuestionsAnswered ? 'next-button' : 'back-button'}`}
              onClick={handleSubmitExam}
              disabled={!allQuestionsAnswered}
            >
              {t('onboarding.exam.submit', 'Submit Exam')}
              <FaCheck className="ml-2" />
            </button>
          )}
        </div>
      </div>
      
      {!allQuestionsAnswered && currentPage === Math.ceil(questions.length / questionsPerPage) - 1 && (
        <div className="mt-4 text-yellow-400 text-sm text-center">
          {t('onboarding.exam.answerAllPrompt', 'Please answer all questions before submitting the exam.')}
        </div>
      )}
      
      {correctAnswersCount >= 3 && (
        <div className="mt-4 text-[#00ffaa] text-sm text-center">
          {t('onboarding.exam.requiredAnswersReached', 'You have answered the required 3 questions correctly! You can continue to the NFT ID minting step or complete more questions to earn more BGL.')}
        </div>
      )}
    </div>
  );
};

export default KnowledgeExam;
