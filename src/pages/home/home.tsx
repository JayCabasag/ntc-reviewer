// import CategoryListings from '@/components/compositions/categories/CategoryListings'
import ReviewerListings from '@/components/compositions/review/ReviewerListings'
import HomeHeading from '@/components/compositions/home/HomeHeading'
import HomeKeyFeatures from '@/components/compositions/home/HomeKeyFeatures'

export default function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center gap-[15px] px-[15px] md:px-0 md:gap-[30px]'>
      <HomeHeading />
      <HomeKeyFeatures />
      <ReviewerListings />
      {/* <CategoryListings /> */}
    </div>
  )
}
