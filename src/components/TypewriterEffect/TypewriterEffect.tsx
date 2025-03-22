import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './TypewriterEffect.css';

interface TypewriterEffectProps {
  phrases: Array<{ text: string; color: string }>;
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  phrases,
  loop = true,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  className = '',
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  // Map phrases to their text values
  const phrasesText = phrases.map(phrase => phrase.text);
  
  const [text] = useTypewriter({
    words: phrasesText,
    loop: loop,
    typeSpeed: typeSpeed,
    deleteSpeed: deleteSpeed,
    delaySpeed: delaySpeed,
    onLoopDone: () => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    },
  });

  // Get the current phrase's color
  const currentColor = phrases[currentPhraseIndex].color;

  return (
    <div className={`typewriter-effect ${className}`}>
      <span className={currentColor}>{text}</span>
      <Cursor cursorColor="#00ffaa" />
    </div>
  );
};

export default TypewriterEffect;
