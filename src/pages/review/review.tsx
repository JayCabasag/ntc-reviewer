import { useParams } from "react-router-dom";
import PageTitle from "../../components/compositions/home/PageTitle";

export default function ReviewPage() {
  const { elementId } = useParams()
  return (
    <div>
      <PageTitle text={`Element ${elementId} Reviewer`} />
      <div>
        
      </div>
    </div>
  )
}
