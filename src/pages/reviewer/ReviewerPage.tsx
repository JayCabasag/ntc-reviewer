import { useParams } from "react-router-dom"
import PageTitle from "@/components/compositions/home/PageTitle"
import ReviewerCallToAction from "@/components/compositions/review/ReviewerCallToAction"

export default function ReviewerPage() {
  const { reviewerId  } = useParams()
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-12">
       <PageTitle text={`NTC Reviewer - ${reviewerId}`}/>
       <p className="max-w-xl px-2 mx-auto text-center text-[14px] md:text-base text-gray-600">
        Radio Rules and Regulations
      </p>
      <ReviewerCallToAction />
    </div>
  )
}
