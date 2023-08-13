import { Link } from "react-router-dom"
import { Reviewer } from "../../../utils/types"
import ReviewImageAsset from "../../assets/ReviewImage"

interface ComponentProps {
   reviewer: Reviewer
}

function ReviewerCard({ reviewer } : ComponentProps) {
  const { label, id, description } = reviewer
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full">
      <div className="flex items-center">
        <ReviewImageAsset height={150} width={150} />
        <Link className="pl-[15px] " to={`reviewer/${id}`}>
            <h5 className="capitalize font-extrabold text-transparent text-md md:text-lg bg-clip-text bg-gradient-to-r from-primary to-pink-600">{label}</h5>
        </Link>
      </div>
      <div>
        <p className="mb-3 text-[14px] md:text-base text-gray-600 font-normal">{description}</p>
        <Link 
          to={`reviewer/${id}`} 
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary/50 dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">
            Choose
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
      </div>
    </div>
  )
}

export default ReviewerCard