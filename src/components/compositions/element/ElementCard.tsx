import { Link } from "react-router-dom"
import { Element } from "../../../utils/types"
import ReviewImageAsset from "../../assets/ReviewImage"

interface ComponentProps {
   element: Element
}

function ElementCard({ element } : ComponentProps) {
  const { label, link, description } = element
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center">
        <ReviewImageAsset height={150} width={150} />
        <Link className="pl-[15px] " to={`element/${link}`}>
            <h5 className="capitalize font-extrabold text-transparent text-md md:text-lg bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{label}</h5>
        </Link>
      </div>
      <div>
        <p className="mb-3 text-[14px] md:text-base text-gray-600 font-normal">{description}</p>
        <Link to={`element/${link}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Choose
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
      </div>
    </div>
  )
}

export default ElementCard