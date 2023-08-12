import { Element } from "../../../utils/types"
import ElementCard from "./ElementCard"

const elemetOptons = [
    {
        label: 'element 1',
        link: 'element-1',
        description: 'Amateur Radio Examination Reviuwer for Class C'
    },
    {
        label: 'element 2',
        link: 'element-2',
        description: 'Radio Rules and Regulations - Amateur Radio Examination Reviuwer for Class C',
    },
    {
        label: 'element 3',
        link: 'element-3',
        description: 'Amateur Radio Examination Reviuwer for Class C',
    },
    {
        label: 'element 4',
        link: 'element-4',
        description: 'Amateur Radio Examination Reviuwer for Class C',
    }
] as Element[]

export default function ElementListings() {
  return (
    <div className="w-full max-w-7xl justify-center">
        <h1 className="text-[#212121] font-bold text-lg md:text-xl">Available elements</h1>
        <div className="w-full flex flex-wrap gap-4 mt-[15px]">
          {elemetOptons.map(element => <ElementCard key={element.link} element={element}/>)}
        </div>
    </div>
  )
}
