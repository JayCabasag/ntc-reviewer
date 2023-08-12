import { Link, useParams } from "react-router-dom"
import PageTitle from "../../components/compositions/home/PageTitle"
import { Pencil2Icon, ReaderIcon } from "@radix-ui/react-icons"

export default function ElementPage() {
  const { elementId  } = useParams()
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-12">
       <PageTitle text={`NTC Reviewer - ${elementId}`}/>
       <p className="max-w-xl px-2 mx-auto text-center text-[14px] md:text-base text-gray-600">
        Radio Rules and Regulations
      </p>
       <div className="mt-[20px] px-4 max-w-7xl w-full flex items-center justify-center flex-col">
        <div className="flex flex-col md:flex-row w-full max-w-sm px-[20px] gap-0 md:gap-4">
          <Link 
            to={'review'}
          >
            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full md:min-w-[200px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                <ReaderIcon />
                Review
              </button>
          </Link>
          <Link 
            to={'exam'}
          >
            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full md:min-w-[200px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                <Pencil2Icon />
                Take Exam
            </button>
          </Link>
        </div>
       </div>
    </div>
  )
}
