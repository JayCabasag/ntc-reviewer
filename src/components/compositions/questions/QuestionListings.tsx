import { Question } from '../../../utils/types'
import QuestionCard from './Question'

interface ComponentProps {
  questions: Question[]
}

export default function QuestionListings({ questions } : ComponentProps ) {
  return (
    <div className='max-w-7xl'>
      {questions.map(question => <QuestionCard key={question.id} props={question}/>)}
    </div>
  )
}
