
import { Question } from "../../../utils/types"

interface ComponentProps {
    props: Question
}
export default function QuestionCard({ props } : ComponentProps) {
  
  const { question, options, correctAnswer } = props

  const getAnswer = (id: number) => {
    const answer = options.find(option => option.id === id)
    return answer?.label
  }

  return (
    <div>
        <p>{question}</p>
        {options.map(option => {
            return <p key={option.id}>{option.label}</p>
        })}
        <p>Correct answer: </p>
        <p>{getAnswer(correctAnswer)}</p>
    </div>
  )
}
