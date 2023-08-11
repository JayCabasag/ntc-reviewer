import { Link, useParams } from "react-router-dom"
import PageTitle from "../../components/compositions/home/PageTitle"

export default function ElementPage() {
  const { elementId  } = useParams()
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
       <PageTitle text={`Welcome to ${elementId}`}/>
       <div className="mt-[20px] max-w-7xl w-full flex items-center justify-center flex-col">
         <p className="my-[20px]">Please select an action : </p>
        <div>
       <Link 
        to={'review'}
       >
         <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
         >
            Review
          </button>
       </Link>
       <Link 
        to={'exam'}
       >
         <button
           type="button"
           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
         >
            Exam
         </button>
       </Link>
        </div>
       </div>
    </div>
  )
}