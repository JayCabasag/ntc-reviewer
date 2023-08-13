import ReviewerCard from "./ReviewerCard"
import ReviewerList from "../../../data.json"

export default function ReviewerListings() {

  const ReviewerListings: typeof ReviewerList = ReviewerList
  const reviewerOptons = ReviewerListings.flatMap(data => data)

  return (
    <div className="w-full max-w-7xl justify-center">
        <h1 className="text-[#212121] w-full text-center font-bold text-lg md:text-xl">Available reviewers</h1>
        <div className="flex flex-wrap gap-4 mt-[15px] w-full justify-center">
          {reviewerOptons.map(reviewer => <ReviewerCard key={reviewer.link} reviewer={reviewer}/>)}
        </div>
    </div>
  )
}
