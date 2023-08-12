import PageTitle from './PageTitle'

export default function HomeHeading() {
  return (
    <div className="md:border w-full py-[35px] md:py-[85px] ">
      <PageTitle text="Welcome to NTC Reviewer Unofficial!" />
      <p className="max-w-xl px-2 mx-auto text-center text-[14px] md:text-base text-gray-600">
        Welcome to NTC Reviewer Unofficial! 
        Your source for insights and information 
        related to the National Telecommunication Commission
      </p>
    </div>
  )
}
