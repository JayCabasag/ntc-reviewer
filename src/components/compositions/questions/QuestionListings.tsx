import { Question } from '../../../utils/types'
import QuestionCardExam from './QuestionCardExam'
import QuestionCardReview from './QuestionCardReview'

interface ComponentProps {
  questions: Question[]
  type: 'for-exam' | 'for-review' | 'for-checking'
}

export default function QuestionListings({ questions, type } : ComponentProps ) {

  console.log(type)

  if (type === 'for-exam') {
    return (
      <div className='max-w-7xl'>
        {questions.map(question => <QuestionCardExam key={question.id} props={question}/>)}
      </div>
    )
  }

  return (
    <div className='max-w-7xl'>
      {questions.map(question => <QuestionCardReview key={question.id} props={question}/>)}
    </div>
  )
}
