import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "@/components/compositions/home/PageTitle";
import ReviewerList from "@/data";
import { Question } from "@/utils/types";
import QuestionListings from "@/components/compositions/questions/QuestionListings";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function ReviewPage() {
  const { reviewerId } = useParams();
  const reviewerData = ReviewerList.find((data) => `${data.id}` === reviewerId);
  const reviewerQuestions =
    (reviewerData?.questions as Question[]) ?? ([] as Question[]);
  const navigate = useNavigate();

  const reviewerLabel = reviewerData?.label ?? "";

  return (
    <div className="flex justify-center items-center flex-col gap-2 md:gap-6 pt-[30px]">
      <PageTitle text={`${reviewerLabel} Reviewer`} />
      <div className="w-full max-w-7xl">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex gap-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <ArrowLeftIcon />
          Back
        </button>
      </div>
      <QuestionListings type="for-review" questions={reviewerQuestions} />
    </div>
  );
}
