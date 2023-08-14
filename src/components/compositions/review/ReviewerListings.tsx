import ReviewerCard from "./ReviewerCard"
import ReviewerList from "@/data.json"

export default function ReviewerListings() {

  const ReviewerListings: typeof ReviewerList = ReviewerList
  const reviewerOptons = ReviewerListings.flatMap(data => data)

  return (
    <div className="w-full py-[15px] max-w-7xl justify-center">
        <h1 className=" w-full text-center font-bold text-lg md:text-3xl text-primary">Available reviewers</h1>
        <div className="flex flex-wrap gap-4 mt-[15px] w-full justify-center">
          {reviewerOptons.map(reviewer => <ReviewerCard key={reviewer.link} reviewer={reviewer}/>)}
        </div>
    </div>
  )
}
