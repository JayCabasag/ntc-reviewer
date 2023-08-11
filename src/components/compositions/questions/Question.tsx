import { useState } from 'react'
import { Question } from "../../../utils/types"
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons'

interface ComponentProps {
    props: Question
}
export default function QuestionCard({ props } : ComponentProps) {
  
  const { question, options, correctAnswer } = props
  const [displayOptions, setDisplayOptions] = useState<boolean>(false)

  const getAnswer = (id: number) => {
    const answer = options.find(option => option.id === id)
    return answer?.label
  }

  const letters = [ 'A', 'B', 'C', 'D']

  return (
    <div className="p-4 flex flex-col gap-2">
        <p><strong>({props.id}).</strong> {question}</p>
        <div className='w-full'>
          <button
            className='transition-all'
            onClick={() => setDisplayOptions(!displayOptions)}
        >
           <span className='flex items-center gap-2'>
             {displayOptions ?  <><EyeClosedIcon /> Hide Options</> : <> <EyeOpenIcon /> Show Options </> }
           </span>
        </button>
        </div>
        {!displayOptions && options.map(option => {
            return <p key={option.id}>{letters[option.id - 1]}.{' '}{option.label}</p>
        })}
        <div className="p-4 flex gap-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <p  className="font-medium">Correct answer: </p>
            <p>{getAnswer(correctAnswer)}</p>
        </div>
    </div>
  )
}
