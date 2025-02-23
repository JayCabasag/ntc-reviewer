import { useParams } from "react-router-dom";
import PageTitle from "@/components/compositions/home/PageTitle";
import ReviewerCallToAction from "@/components/compositions/review/ReviewerCallToAction";
import ReviewerList from "@/data";

export default function ReviewerPage() {
  const { reviewerId } = useParams();
  const reviewer = ReviewerList.find(
    (reviewer) => `${reviewer.id}` === reviewerId
  );
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-12">
      <PageTitle text={`Reviewer for - ${reviewer?.label ?? ""}`} />
      <p className="max-w-xl px-2 mx-auto text-center text-[14px] md:text-base text-gray-600">
        {reviewer?.description ?? ""}
      </p>
      <ReviewerCallToAction />
    </div>
  );
}
