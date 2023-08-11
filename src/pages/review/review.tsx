import { useParams } from "react-router-dom";
import PageTitle from "../../components/compositions/home/PageTitle";
import data from "../../data.json"
import { Question } from "../../utils/types";
import QuestionListings from "../../components/compositions/questions/QuestionListings";

export default function ReviewPage() {
  const { elementId } = useParams()

  const elementTwoQuestions = data[0]['element-2'] as Question[]
  
  return (
    <div className="flex justify-center items-center flex-col gap-2 md:gap-8">
      <PageTitle text={`Element ${elementId} Reviewer`} />
      <QuestionListings questions={elementTwoQuestions}/>
    </div>
  )
}
