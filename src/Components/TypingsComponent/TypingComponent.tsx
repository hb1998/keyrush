import React, { ReactElement, useState, useEffect } from 'react'
import './TypingComponent.css'
import { getRandomWords, word } from '../../mock/words'

interface Props {

}

const MAX_TIMER = 60
export default function TypingComponent({ }: Props): ReactElement {
    const [words, setWords] = useState<word[]>(getRandomWords())
    const [timer, setTimer] = useState(MAX_TIMER)
    const [typingStarted, setTypingStarted] = useState(false)
    const [currentWordConfig, setCurrentWordConfig] = useState({ text: '', index: 0 })
    let interval;
    useEffect(() => {
        initRace()
    }, [])

    const startTimer = () => {
        interval = setInterval(() => {
            if (timer === 0) {
                console.log('Timesup')
                clearInterval(interval)
            } else {
                setTimer(timer => timer - 1)
            }
        }, 1000);
    }

    const onChangeHandler = (ev: React.ChangeEvent<any>) => {
        if (!typingStarted) {
            setTypingStarted(true);
            startTimer();
        }
        const val = ev.target.value;
        const lasLetter = val[val.length - 1];
        setCurrentWordConfig({
            ...currentWordConfig,
            text: lasLetter === ' ' ? '' : val,
        })
        if (lasLetter === ' ') updateVisited()
    }
    const updateVisited = () => {
        const updatedWords = [...words];
        let iter = 0
        for (iter = 0; iter < updatedWords.length; iter++) {
            if (!updatedWords[iter].visited) {
                updatedWords[iter].current = false
                updatedWords[iter].visited = true;
                break;
            }
        }
        if (iter + 1 >= updatedWords.length) {
            debugger;
            computeResult()

        } else {
            updatedWords[iter].correct = currentWordConfig.text === updatedWords[iter].text
            updatedWords[iter + 1].current = true
            setCurrentWordConfig((prevState) => ({
                ...prevState,
                index: prevState.index + 1
            }))
            setWords(updatedWords)
        }
    }
    const computeResult = () => {
        const correctWordsLength = words.reduce((acc, word) => word.correct ? acc + 1 : acc, 0)
        const wpm = ((correctWordsLength / (MAX_TIMER - timer)) / 100 * 60) * 100
        alert(JSON.stringify({ correct: correctWordsLength, wpm }))
    }

    const initRace = () => {
        const firstWord = words[0]
        firstWord.current = true;
        setTimer(MAX_TIMER)
        if (interval) clearInterval(interval)
        setWords([firstWord, ...words.slice(1, words.length)])
    }

    return (
        <div className="typingWrapper" >
            <div className="displayContainer">
                {
                    words.map((word, index) => (
                        <span key={index}
                            className={word.current ? 'word  activeWord' : 'word'}
                            style={word.correct ? { color: 'green' } : word.visited ? { color: 'red' } : {}}
                        >{word.text}</span>
                    ))
                }
            </div>
            <div className="typingContainer">
                <div className="typeCanvas">
                    <input value={currentWordConfig.text} onChange={onChangeHandler} className="typeField" type="text" />
                </div>
                <div className="timer">
                    {timer}
                </div>
                <div className="actions">

                </div>
            </div>
        </div>
    )
}
