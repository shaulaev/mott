'use client'

import React, {useState, useEffect} from 'react'

interface props {
    text: string[] | string,
    delay: number,
}

const TextTyping: React.FC<props> = ({text, delay}) => {

    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }, [currentIndex, delay, text]);

    return (
        <>{currentText}</>
    )
}

const MemoizedTextTyping = React.memo(TextTyping)

export default MemoizedTextTyping;