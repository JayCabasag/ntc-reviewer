import { Reviewer } from "../../../utils/types"
import ReviewerCard from "./ReviewerCard"

const reviewerOptons = [
    {
        label: 'NTC - element 1',
        link: 'element-1',
        description: 'Amateur Radio Examination Reviuwer for Class C'
    },
    {
        label: 'NTC - element 2',
        link: 'element-2',
        description: 'Radio Rules and Regulations - Amateur Radio Examination Reviuwer for Class C',
    },
    {
        label: 'NTC - element 3',
        link: 'element-3',
        description: 'Amateur Radio Examination Reviuwer for Class C',
    },
    {
        label: 'NTC - element 4',
        link: 'element-4',
        description: 'Amateur Radio Examination Reviuwer for Class C',
    }
] as Reviewer[]

export default function ReviewerListings() {
  return (
    <div className="w-full max-w-7xl justify-center">
        <h1 className="text-[#212121] w-full text-center font-bold text-lg md:text-xl">Available reviewers</h1>
        <div className="flex flex-wrap gap-4 mt-[15px] w-full justify-center">
          {reviewerOptons.map(reviewer => <ReviewerCard key={reviewer.link} reviewer={reviewer}/>)}
        </div>
    </div>
  )
}
