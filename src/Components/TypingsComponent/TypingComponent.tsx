import React, { ReactElement, useState, useEffect, useContext, useRef } from 'react'
import './TypingComponent.css'
import { getRandomWords, word } from '../../mock/words'
import { GlobalContext } from '../../state/GlobalState'

interface Props {

}

const MAX_TIMER = 60
export default function TypingComponent({ }: Props): ReactElement {
    const [words, setWords] = useState<word[]>([])
    const [timer, setTimer] = useState(MAX_TIMER)
    const [typingStarted, setTypingStarted] = useState(false)
    const [currentWordConfig, setCurrentWordConfig] = useState({ text: '', index: 0 })
    const { initCars, updateCar } = useContext(GlobalContext)
    const interval = useRef<any>();

    useEffect(() => {
        initRace()
    }, [])

    useEffect(() => {
        console.log(timer)
        if (timer === 0) {
            alert('Timesup')
            computeResult(true);
            initRace()
            clearInterval(interval.current)
        }

    }, [timer])

    const startTimer = () => {
        interval.current = setInterval(() => {
            setTimer(timer => timer - 1)
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
            computeResult(true);
            initRace()

        } else {
            updatedWords[iter].correct = currentWordConfig.text === updatedWords[iter].text
            updatedWords[iter + 1].current = true
            setCurrentWordConfig((prevState) => ({
                ...prevState,
                index: prevState.index + 1
            }))
            setWords(updatedWords)
            updateCar({
                name: 'user',
                correctWords: computeResult().correctWords,
                totalWords: 50,
                id: 1
            })
        }
    }
    const computeResult = (showRes = false) => {
        const correctWords = words.reduce((acc, word) => word.correct ? acc + 1 : acc, 0)
        const wpm = ((correctWords / (MAX_TIMER - timer)) / 100 * 60) * 100
        if (showRes) {
            alert(JSON.stringify({ correct: correctWords, wpm }))
        }
        return { correctWords, wpm }
    }

    const initRace = () => {
        const randomWords = getRandomWords()
        const firstWord = randomWords[0]
        firstWord.current = true;
        setTypingStarted(false);
        setTimer(MAX_TIMER)
        if (interval.current) clearInterval(interval.current)
        setWords(randomWords)
        initCars([{
            name: 'user',
            correctWords: 0,
            totalWords: 50,
            id: 1
        }])
    }

    return (
        <div className="typingWrapper" >
            <div className="displayContainer">
                {
                    words.map((word, index) => (
                        <span key={index}
                            className={word.current ? 'word  activeWord' : 'word'}
                            style={word.correct ? { color: '#42F76A' } : word.visited ? { color: '#f80043' } : {}}
                        >{word.text}</span>
                    ))
                }
            </div>
            <div className="typingContainer">
                <div className="typeCanvas">
                    <input autoFocus value={currentWordConfig.text} onChange={onChangeHandler} className="typeField" type="text" />
                </div>
                <div className="actions">
                    <div onClick={initRace} >Reload</div>
                </div>
                <div className="timer">
                    {timer}
                </div>
            </div>
        </div>
    )
}
