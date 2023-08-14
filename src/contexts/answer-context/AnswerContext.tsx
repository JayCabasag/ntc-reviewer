
import { createContext, ReactNode, useState } from 'react'
import { AnsweredQuestion } from '@/utils/types'

export const AnswerContext = createContext<AnsweredQuestion[]>([])
export const UpdateAnswerContext = createContext<(question: AnsweredQuestion) => void>(() => {})
export const ScoreContext = createContext<number>(0)
export const CalculateScoreContext = createContext<() => void>(() => {})
export const RemoveAnswersContext = createContext<() => void>(() => {})
export const ExamStatusContext = createContext<'in-progress'|'submitted'>('in-progress')
export const UpdateExamStatusContext = createContext<(newStatus: 'in-progress' | 'submitted') => void>(() => {})

interface ContextProps {
    children: ReactNode
}

export const AnswerContextProvider = ({ children } : ContextProps ) => {
    const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestion[]>([])
    const [score, setScore] = useState(0)
    const [status, setStatus] = useState<'in-progress' | 'submitted'>('in-progress')

    const updateAnsweredQuestion = (question: AnsweredQuestion) => {
        const changeAnswer = answeredQuestions.find(q => q.id === question.id)
        if (changeAnswer) {
            const filteredAnswer = answeredQuestions.map(aQ => {
                const sameQuestion = aQ.id === question.id
                if (sameQuestion) {
                    return question
                }
                return aQ
            })
            return setAnsweredQuestions(filteredAnswer)
        }
        return setAnsweredQuestions(prev => [...prev, question])
    }

    const calculateScore = () => {
        const calculatedScore = answeredQuestions.reduce((accumulator, currentValue) => {
            const correctAnswer = currentValue.userAnswer === currentValue.correctAnswer
            if (correctAnswer) {
                return accumulator + 1
            }
            return accumulator
        }, 0)
        setScore(calculatedScore)
    }

    const removeAnswers = () => {
        setAnsweredQuestions([])
    }

    const updateExamStatus = (newStatus: 'in-progress' | 'submitted') => {
        setStatus(newStatus)
    }

    return (
        <AnswerContext.Provider value={answeredQuestions}>
            <UpdateAnswerContext.Provider value={updateAnsweredQuestion}>
                <ScoreContext.Provider value={score}>
                    <CalculateScoreContext.Provider value={calculateScore}>
                      <RemoveAnswersContext.Provider value={removeAnswers}>
                        <ExamStatusContext.Provider value={status}>
                            <UpdateExamStatusContext.Provider value={updateExamStatus}>
                              {children}
                            </UpdateExamStatusContext.Provider>
                        </ExamStatusContext.Provider>
                      </RemoveAnswersContext.Provider>
                    </CalculateScoreContext.Provider>
                </ScoreContext.Provider>
            </UpdateAnswerContext.Provider>
        </AnswerContext.Provider>
    )
}

