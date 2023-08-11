import { Question } from "../../../utils/types"
import { useState } from 'react'
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons'

interface ComponentProps {
    props: Question
}
export default function QuestionCardExam({ props } : ComponentProps) {
  
  const { question, options } = props

  const [hideLetters, setHideLetters] = useState(false)
  const [selectedAnswerId, setSelectedAnswerId] = useState(0)

  const getAnswer = (id: number) => {
    const answer = options.find(option => option.id === id)
    return answer?.label
  }

  const letters = [ 'A', 'B', 'C', 'D']

  const handleOnSelectAnswer = (id: number) => {
    setSelectedAnswerId(id)
  }

  return (
    <div className="p-4 flex flex-col gap-2">
        <p><strong>({props.id}).</strong> {question}</p>
        <div className='w-full'>
          <button
            className='transition-all'
            onClick={() => setHideLetters(!hideLetters)}
        >
           <span className='flex items-center gap-2'>
             {hideLetters ?  <><EyeClosedIcon /> Hide Letters</> : <> <EyeOpenIcon /> Show Letters </> }
           </span>
        </button>
        </div>
        <div className="input-group flex flex-col gap-2 w-full">
            {options.map(option => (
                <label key={option.id} className="flex items-center gap-2">
                    <input
                        checked={option.id === selectedAnswerId}
                        type="radio"
                        name={`radioGroup-${props.id}`}
                        value={option.id}
                        onChange={() => handleOnSelectAnswer(option.id)} // Define your change handler function here
                    />
                    {' '}
                    {hideLetters && (
                        <>
                          {letters[option.id - 1]}. {' '}
                        </>
                    )}
                    {option.label}
                </label>
            ))}
        </div>
        <div className="flex gap-4 p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <p  className="font-medium">Your answer: </p>
            <p>{getAnswer(selectedAnswerId)}</p>
        </div>
    </div>
  )
}
