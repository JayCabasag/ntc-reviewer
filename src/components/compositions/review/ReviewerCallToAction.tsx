import { Pencil2Icon, ReaderIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

const callToActions = [
    {
        label: 'review',
        link: 'review',
        icon: <ReaderIcon />
    },
    {
        label: 'exam',
        link: 'exam',
        icon: <Pencil2Icon />
    }
] as const

export default function ReviewerCallToAction() {
  return (
    <div className="mt-[20px] px-4 max-w-7xl w-full flex items-center justify-center flex-col">
    <div className="flex flex-col md:flex-row w-full max-w-sm px-[20px] gap-0 md:gap-4">
      {callToActions.map(action => {
        return (
            <Link
                to={action.link}
                key={action.link}
            >
                <button
                  type="button"
                  className="capitalize flex items-center justify-center gap-2 w-full md:min-w-[200px] text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-priamry/50 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    {action.icon}
                    {action.label}
                </button>
            </Link>
        )
      })}
    </div>
   </div>
  )
}
