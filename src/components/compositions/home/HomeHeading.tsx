import PageTitle from './PageTitle'

export default function HomeHeading() {
  return (
    <div className="md:border w-full py-[35px] md:py-[85px] flex flex-col justify-center items-center ">
      <PageTitle text="Exam License Online: PH Governement License exam reviewer" />
      <p className="max-w-xl px-2 mx-auto text-center text-[14px] md:text-base text-gray-600">
        Excel in government license exams with ExamLicenseOnline. Practice questions, timed tests, and detailed explanations. Prepare, track progress, and succeed in obtaining various licenses.
      </p>
    </div>
  )
}
