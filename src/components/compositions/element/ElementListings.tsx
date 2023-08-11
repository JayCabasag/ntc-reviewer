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
    <div className="w-full max-w-7xl flex flex-wrap gap-4 justify-center">
        {elemetOptons.map(element => <ElementCard key={element.link} element={element}/>)}
    </div>
  )
}
