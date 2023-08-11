import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../components/compositions/home/PageTitle";
import data from "../../data.json"
import { Question } from "../../utils/types";
import QuestionListings from "../../components/compositions/questions/QuestionListings";
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { useState } from 'react'


export default function ExamPage() {

  const { elementId } = useParams()
  const elementTwoQuestions = data[0]['element-2'] as Question[]
  const navigate = useNavigate();

  const [status, setStatus] = useState<'in-progress'|'submitted'>('submitted')
  const [remarks, setRemarks] = useState<'passed' | 'failed'>('passed')

  return (
    <div className="flex justify-center items-center flex-col gap-2 md:gap-8">
      <PageTitle text={`Element ${elementId} Exam`} />
      <div className="w-full max-w-7xl">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex gap-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <ArrowLeftIcon/>
          Back
      </button>
      {status === 'submitted' && remarks === 'failed' && (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">You failed!</span> score : {JSON.stringify(0/100)}
        </div>
      )}
     {status === 'submitted' && remarks === 'passed' && (
        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
          <span className="font-medium">Congratulations!</span> score : {JSON.stringify(99/100)}
        </div>
      )}

      <div>
        
      </div>
      </div>
      <QuestionListings type={'for-exam'} questions={elementTwoQuestions}/>
      <div className="w-full flex items-center justify-center">
          <button 
            type="button" 
            className="mb-[20px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {status === 'submitted' ? 'Try Again' : 'Submit Answers'}
          </button>
      </div>
    </div>
  )
}
