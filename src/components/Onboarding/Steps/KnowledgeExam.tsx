import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa';

interface KnowledgeExamProps {
  onComplete: (score: number, passed: boolean, answers: Record<string, string>) => void;
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

const KnowledgeExam: React.FC<KnowledgeExamProps> = ({ onComplete }) => {
  const { t } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds

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
      bglReward: 0.05
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
      bglReward: 0.05
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
      bglReward: 0.05
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
      bglReward: 0.05
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
      bglReward: 0.05
    },
    {
      id: 'q6',
      category: t('onboarding.exam.category.traditions', 'Traditions & National Identity'),
      text: t('onboarding.exam.q6', 'What is the name of Bulgaria\'s traditional yogurt-based drink?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q6.a', 'Ayran') },
        { id: 'b', text: t('onboarding.exam.q6.b', 'Rakia') },
        { id: 'c', text: t('onboarding.exam.q6.c', 'Boza') },
        { id: 'd', text: t('onboarding.exam.q6.d', 'Kompot') }
      ],
      correctAnswer: 'a',
      bglReward: 0.05
    },
    {
      id: 'q7',
      category: t('onboarding.exam.category.traditions', 'Traditions & National Identity'),
      text: t('onboarding.exam.q7', 'What is the traditional Bulgarian instrument used in folk music?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q7.a', 'Gaida (bagpipe)') },
        { id: 'b', text: t('onboarding.exam.q7.b', 'Mandolin') },
        { id: 'c', text: t('onboarding.exam.q7.c', 'Violin') },
        { id: 'd', text: t('onboarding.exam.q7.d', 'Clarinet') }
      ],
      correctAnswer: 'a',
      bglReward: 0.05
    },
    {
      id: 'q8',
      category: t('onboarding.exam.category.traditions', 'Traditions & National Identity'),
      text: t('onboarding.exam.q8', 'What is the capital of Bulgaria?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q8.a', 'Varna') },
        { id: 'b', text: t('onboarding.exam.q8.b', 'Plovdiv') },
        { id: 'c', text: t('onboarding.exam.q8.c', 'Sofia') },
        { id: 'd', text: t('onboarding.exam.q8.d', 'Burgas') }
      ],
      correctAnswer: 'c',
      bglReward: 0.05
    },
    {
      id: 'q9',
      category: t('onboarding.exam.category.future', 'Future Vision & Blockchain Governance'),
      text: t('onboarding.exam.q9', 'What is the core principle behind NOVA BULGARIA\'s governance model?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q9.a', 'Wealth determines power') },
        { id: 'b', text: t('onboarding.exam.q9.b', 'Proof of Contribution (PoC)') },
        { id: 'c', text: t('onboarding.exam.q9.c', 'Traditional elections') },
        { id: 'd', text: t('onboarding.exam.q9.d', 'Centralized control') }
      ],
      correctAnswer: 'b',
      bglReward: 0.05
    },
    {
      id: 'q10',
      category: t('onboarding.exam.category.future', 'Future Vision & Blockchain Governance'),
      text: t('onboarding.exam.q10', 'How can citizens increase their voting power?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q10.a', 'By purchasing influence') },
        { id: 'b', text: t('onboarding.exam.q10.b', 'By passing exams and contributing') },
        { id: 'c', text: t('onboarding.exam.q10.c', 'By knowing important people') },
        { id: 'd', text: t('onboarding.exam.q10.d', 'By paying taxes') }
      ],
      correctAnswer: 'b',
      bglReward: 0.05
    },
    {
      id: 'q11',
      category: t('onboarding.exam.category.future', 'Future Vision & Blockchain Governance'),
      text: t('onboarding.exam.q11', 'What type of identity system does NOVA BULGARIA use?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q11.a', 'Soulbound NFT IDs') },
        { id: 'b', text: t('onboarding.exam.q11.b', 'National ID cards') },
        { id: 'c', text: t('onboarding.exam.q11.c', 'Passport scans') },
        { id: 'd', text: t('onboarding.exam.q11.d', 'Email registration') }
      ],
      correctAnswer: 'a',
      bglReward: 0.05
    },
    {
      id: 'q12',
      category: t('onboarding.exam.category.future', 'Future Vision & Blockchain Governance'),
      text: t('onboarding.exam.q12', 'What are the two main tokens used in NOVA BULGARIA\'s economy?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q12.a', 'BGL and BGL-S') },
        { id: 'b', text: t('onboarding.exam.q12.b', 'Bitcoin and Ethereum') },
        { id: 'c', text: t('onboarding.exam.q12.c', 'Dollar and Euro') },
        { id: 'd', text: t('onboarding.exam.q12.d', 'Gold and Silver') }
      ],
      correctAnswer: 'a',
      bglReward: 0.05
    },
    {
      id: 'q13',
      category: t('onboarding.exam.category.economy', 'Decentralized Economy & Services'),
      text: t('onboarding.exam.q13', 'How do doctors get paid in NOVA BULGARIA\'s healthcare system?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q13.a', 'Based on blockchain-verified public trust') },
        { id: 'b', text: t('onboarding.exam.q13.b', 'Through fixed government salaries') },
        { id: 'c', text: t('onboarding.exam.q13.c', 'By charging patients directly') },
        { id: 'd', text: t('onboarding.exam.q13.d', 'By selling private data') }
      ],
      correctAnswer: 'a',
      bglReward: 0.05
    },
    {
      id: 'q14',
      category: t('onboarding.exam.category.economy', 'Decentralized Economy & Services'),
      text: t('onboarding.exam.q14', 'How can citizens fund public projects?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q14.a', 'By staking BGL') },
        { id: 'b', text: t('onboarding.exam.q14.b', 'By paying taxes') },
        { id: 'c', text: t('onboarding.exam.q14.c', 'By government funding only') },
        { id: 'd', text: t('onboarding.exam.q14.d', 'Through private bank loans') }
      ],
      correctAnswer: 'a',
      bglReward: 0.05
    },
    {
      id: 'q15',
      category: t('onboarding.exam.category.economy', 'Decentralized Economy & Services'),
      text: t('onboarding.exam.q15', 'What is the main way users can access services like education and healthcare?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q15.a', 'By using their NFT ID') },
        { id: 'b', text: t('onboarding.exam.q15.b', 'By showing a passport') },
        { id: 'c', text: t('onboarding.exam.q15.c', 'By getting a government-issued card') },
        { id: 'd', text: t('onboarding.exam.q15.d', 'By paying a monthly fee') }
      ],
      correctAnswer: 'a',
      bglReward: 0.05
    },
    {
      id: 'q16',
      category: t('onboarding.exam.category.economy', 'Decentralized Economy & Services'),
      text: t('onboarding.exam.q16', 'What prevents users from having multiple accounts?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q16.a', 'Human validation & NFT ID') },
        { id: 'b', text: t('onboarding.exam.q16.b', 'Username/password requirements') },
        { id: 'c', text: t('onboarding.exam.q16.c', 'SMS verification only') },
        { id: 'd', text: t('onboarding.exam.q16.d', 'Nothing, users can have multiple accounts') }
      ],
      correctAnswer: 'a',
      bglReward: 0.05
    },
    {
      id: 'q17',
      category: t('onboarding.exam.category.internet', 'Global Impact & Sovereign Internet'),
      text: t('onboarding.exam.q17', 'What is the purpose of NOVA BULGARIA\'s decentralized internet?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q17.a', 'To ensure freedom from censorship') },
        { id: 'b', text: t('onboarding.exam.q17.b', 'To create a private social network') },
        { id: 'c', text: t('onboarding.exam.q17.c', 'To ban international websites') },
        { id: 'd', text: t('onboarding.exam.q17.d', 'To centralize power') }
      ],
      correctAnswer: 'a',
      bglReward: 0.05
    },
    {
      id: 'q18',
      category: t('onboarding.exam.category.internet', 'Global Impact & Sovereign Internet'),
      text: t('onboarding.exam.q18', 'How can someone participate in securing the network?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q18.a', 'By running a node on their device') },
        { id: 'b', text: t('onboarding.exam.q18.b', 'By paying a monthly fee') },
        { id: 'c', text: t('onboarding.exam.q18.c', 'By owning a mining rig') },
        { id: 'd', text: t('onboarding.exam.q18.d', 'By using social media') }
      ],
      correctAnswer: 'a',
      bglReward: 0.05
    },
    {
      id: 'q19',
      category: t('onboarding.exam.category.internet', 'Global Impact & Sovereign Internet'),
      text: t('onboarding.exam.q19', 'What is the benefit of staking BGL in public projects?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q19.a', 'Earning passive BGL-S without losing value') },
        { id: 'b', text: t('onboarding.exam.q19.b', 'Buying influence in government') },
        { id: 'c', text: t('onboarding.exam.q19.c', 'Getting tax reductions') },
        { id: 'd', text: t('onboarding.exam.q19.d', 'Nothing, it\'s a donation') }
      ],
      correctAnswer: 'a',
      bglReward: 0.05
    },
    {
      id: 'q20',
      category: t('onboarding.exam.category.internet', 'Global Impact & Sovereign Internet'),
      text: t('onboarding.exam.q20', 'What does Proof of Contribution (PoC) reward?'),
      options: [
        { id: 'a', text: t('onboarding.exam.q20.a', 'Knowledge, work, and expertise') },
        { id: 'b', text: t('onboarding.exam.q20.b', 'Political connections') },
        { id: 'c', text: t('onboarding.exam.q20.c', 'Wealth accumulation') },
        { id: 'd', text: t('onboarding.exam.q20.d', 'Random lottery selection') }
      ],
      correctAnswer: 'a',
      bglReward: 0.05
    }
  ];

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answerId
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    let earnedBGL = 0;

    questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
        earnedBGL += question.bglReward;
      }
    });

    const scorePercentage = (correctAnswers / questions.length) * 100;
    
    return {
      correctAnswers,
      scorePercentage,
      earnedBGL
    };
  };

  const handleSubmitExam = () => {
    const { correctAnswers, scorePercentage, earnedBGL } = calculateScore();
    const passed = scorePercentage >= 70;
    
    setScore(scorePercentage);
    setShowResults(true);

    // Pass results back to parent component
    onComplete(scorePercentage, passed, userAnswers);
  };

  const isQuestionAnswered = (questionId: string) => {
    return userAnswers[questionId] !== undefined;
  };

  const allQuestionsAnswered = questions.every(q => isQuestionAnswered(q.id));

  // Render exam results
  if (showResults) {
    const { correctAnswers, scorePercentage, earnedBGL } = calculateScore();
    const passed = scorePercentage >= 70;

    return (
      <div className="step-container">
        <h2 className="step-title">{t('onboarding.exam.results', 'Exam Results')}</h2>
        
        <div className="bg-black bg-opacity-30 p-6 rounded-lg border border-gray-700 mb-8">
          <div className="text-center mb-6">
            <div className={`text-4xl font-bold mb-2 ${passed ? 'text-[#00ffaa]' : 'text-red-500'}`}>
              {passed ? (
                <>{t('onboarding.exam.passed', 'PASSED!')}</>
              ) : (
                <>{t('onboarding.exam.failed', 'NOT PASSED')}</>
              )}
            </div>
            <div className="text-2xl font-bold">
              {t('onboarding.exam.score', 'Your Score')}: {scorePercentage.toFixed(1)}%
            </div>
            <div className="text-xl mt-2">
              {t('onboarding.exam.correctAnswers', 'Correct Answers')}: {correctAnswers} / {questions.length}
            </div>
            <p className="mt-4 text-[#00ffaa] font-bold">
              {t('onboarding.exam.bglEarned', 'BGL Earned')}: {earnedBGL.toFixed(2)} BGL
            </p>
          </div>
          
          {!passed && (
            <div className="mt-6 p-4 bg-red-900 bg-opacity-20 rounded border border-red-700">
              <h3 className="font-bold text-red-400 mb-2">{t('onboarding.exam.retakeInfo', 'You can retake the exam in 24 hours')}</h3>
              <p className="text-sm">
                {t('onboarding.exam.retakeDescription', 'Don\'t worry! You can study and try again. A minimum score of 70% is required to proceed to the next step.')}
              </p>
            </div>
          )}
          
          {passed && (
            <div className="mt-6 p-4 bg-green-900 bg-opacity-20 rounded border border-green-700">
              <h3 className="font-bold text-green-400 mb-2">{t('onboarding.exam.successInfo', 'Congratulations!')}</h3>
              <p className="text-sm">
                {t('onboarding.exam.successDescription', 'You\'ve successfully passed the knowledge exam. You can now proceed to mint your Soulbound NFT ID.')}
              </p>
            </div>
          )}
        </div>
        
        {passed && (
          <div className="text-center">
            <button 
              className="next-button px-8 py-3"
              onClick={() => onComplete(score, passed, userAnswers)}
            >
              {t('onboarding.exam.continueToNFT', 'Continue to NFT ID Minting')} →
            </button>
          </div>
        )}
      </div>
    );
  }

  // Render current question
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="exam-container">
      <div className="exam-header mb-8">
        <h2 className="step-title">{t('onboarding.exam.title', 'Knowledge Exam')}</h2>
        <p className="step-description">
          {t('onboarding.exam.description', 'This exam tests your knowledge about NOVA BULGARIA\'s history, culture, governance, and vision. For each correct answer, you\'ll earn 0.05 BGL (up to 1 BGL total). You need a score of at least 70% to proceed.')}
        </p>
        
        <div className="flex justify-between items-center mt-4 mb-6">
          <div className="text-sm text-gray-400">
            {t('onboarding.exam.answeredLabel', 'Answered')}: <span className="font-bold text-white">{Object.keys(userAnswers).length}</span>/{questions.length}
          </div>
          <div className="text-sm bg-gray-800 px-3 py-1 rounded-full flex items-center">
            <span className="mr-2">⏱️</span>
            <span className={`font-mono ${timeLeft < 300 ? 'text-red-400' : 'text-white'}`}>{formatTime(timeLeft)}</span>
          </div>
        </div>
        
        <div className="exam-progress">
          <span className="text-sm font-bold">{currentQuestionIndex + 1}</span>
          <div className="exam-progress-bar">
            <div 
              className="exam-progress-fill" 
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <span className="text-sm font-bold">{questions.length}</span>
        </div>
      </div>
      
      <div className="question-container">
        <div className="question-category">{currentQuestion.category}</div>
        <div className="question-text">{currentQuestion.text}</div>
        
        <div className="answer-options">
          {currentQuestion.options.map(option => (
            <div 
              key={option.id}
              className={`answer-option ${userAnswers[currentQuestion.id] === option.id ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(currentQuestion.id, option.id)}
            >
              <span className="answer-radio">
                {userAnswers[currentQuestion.id] === option.id ? (
                  <span className="w-4 h-4 inline-block rounded-full bg-[#00ffaa] border-2 border-[#00ffaa]"></span>
                ) : (
                  <span className="w-4 h-4 inline-block rounded-full border-2 border-gray-400"></span>
                )}
              </span>
              <span>{option.id.toUpperCase()}. {option.text}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <button 
          className="nav-button back-button"
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
        >
          <FaChevronLeft className="mr-2" />
          {t('onboarding.exam.previous', 'Previous')}
        </button>
        
        {currentQuestionIndex < questions.length - 1 ? (
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
      
      {!allQuestionsAnswered && currentQuestionIndex === questions.length - 1 && (
        <div className="mt-4 text-yellow-400 text-sm text-center">
          {t('onboarding.exam.answerAllPrompt', 'Please answer all questions before submitting the exam.')}
        </div>
      )}
    </div>
  );
};

export default KnowledgeExam;
