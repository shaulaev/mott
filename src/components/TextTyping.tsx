'use client'

import { useTranslation } from 'react-i18next';
import React, {useState, useEffect} from 'react'

interface props {
    text: string[] | string,
    delay: number,
}

const TextTyping: React.FC<props> = ({text, delay}) => {

    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
      let timeout = null

      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentText + text[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        }, delay);
      }

      return () => clearTimeout(timeout);
    }, [currentIndex, delay, text]);

    useEffect(() => {
      setCurrentText('');
      setCurrentIndex(0);
    }, [text])

    return (
        <>{currentText}</>
    )
}

const MemoizedTextTyping = React.memo(TextTyping)

export default TextTyping;