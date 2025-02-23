import { Reviewer } from "@/utils/types";
import ReviewerCard from "./ReviewerCard";
import ReviewerData from "@/data/index";

export default function ReviewerListings() {
  const reviewerList: Reviewer[] = ReviewerData as Reviewer[];

  return (
    <div className="w-full py-[15px] max-w-7xl justify-center">
      <h1 className=" w-full text-center font-bold text-lg md:text-3xl text-primary">
        Available reviewers
      </h1>
      <div className="flex flex-wrap gap-4 mt-[15px] w-full justify-center">
        {reviewerList.map((reviewer) => (
          <ReviewerCard key={reviewer.link} data={reviewer as Reviewer} />
        ))}
      </div>
    </div>
  );
}
