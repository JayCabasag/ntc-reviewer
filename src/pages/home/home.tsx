import CategoryListings from '../../components/compositions/categories/CategoryListings'
import ElementListings from '../../components/compositions/element/ElementListings'
import HomeHeading from '../../components/compositions/home/HomeHeading'

export default function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center gap-[15px] px-[15px] md:px-0 md:gap-[30px]'>
      <HomeHeading />
      <ElementListings />
      <CategoryListings />
    </div>
  )
}
