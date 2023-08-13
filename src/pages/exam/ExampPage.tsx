import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../components/compositions/home/PageTitle";
// import ReviewerList from "../../data.json"
// import QuestionListings from "../../components/compositions/questions/QuestionListings";
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { useRef } from 'react'
import { useCalculateScore, useExamStatus, useExamUpdateStatus, useRemoveAnswers, useScore } from "../../contexts/answer-context/context-hooks";


export default function ExamPage() {
  const { reviewerId } = useParams()
  // const reviewerListings: typeof ReviewerList = ReviewerList.flatMap(data => Object.values(data))
  // console.log(reviewerListings)
  const navigate = useNavigate();
  const calculateScore = useCalculateScore()
  const removeAnswers = useRemoveAnswers()
  const examStatus = useExamStatus()
  const updateExamStatus = useExamUpdateStatus()
  const score = useScore()

  const remarks = score <= 49 ? 'failed' : 'passed' 
  const topRef = useRef<HTMLDivElement | null>(null)

  const handleSubmitAnswer = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' })
    calculateScore()
    updateExamStatus('submitted')
  }

  const handleTryAgain = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' })
    removeAnswers()
    updateExamStatus('in-progress')
    window.location.reload();
  }

  return (
      <div className="flex justify-center items-center flex-col gap-2 pt-[30px]">
        <PageTitle text={`${reviewerId} Exam`} />
        <div ref={topRef}></div>
        <div className="w-full max-w-7xl">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex gap-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          <ArrowLeftIcon/>
            Back
        </button>
        <div>
          {examStatus === 'submitted' && remarks === 'failed' && (
            <div className="p-4 mb-4 text-lg text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <span className="font-bold">You failed!</span> score : {`${score}/100`}
            </div>
          )}
          {examStatus === 'submitted' && remarks === 'passed' && (
            <div className="p-4 mb-4 text-lg text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
              <span className="font-bold">Congratulations!</span> score :  {`${score}/100`}
            </div>
          )}
          {examStatus === 'in-progress' && (
            <div className="p-4 mb-4 text-lg text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
              <span className="font-bold">Warning!</span> Do not refresh page to prevent answer lose.
            </div>
          )}
          {examStatus !== 'in-progress' && (
             <button 
                type="button"
                onClick={handleTryAgain}
                className="mb-[20px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Try Again
              </button>
          )}
        </div>
        </div>
        {/* <QuestionListings type={'for-exam'} questions={elementTwoQuestions}/> */}
        <div className="w-full flex items-center justify-center">
            <button 
              type="button"
              onClick={handleSubmitAnswer}
              className="mb-[20px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit Answers
            </button>
        </div>
      </div>
  )
}
