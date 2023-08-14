import { OnlineTestPanaImage } from "@/components/assets/OnlineTestImages"

export default function HomeKeyFeatures() {
  return (
    <div className="flex flex-col md:flex-row">
        <OnlineTestPanaImage height={600} width={600}/>
        <div>
            <div className="mt-[30px]">
                <h1 className="text-3xl md:text-5xl font-bold text-primary">It's free</h1>
                <ul className="mt-[12px]">
                    <li>Over 100+ exams to take on.</li>
                </ul>
            </div>
            <div className="my-[30px] md:mt-[70px]">
                <h1 className="text-3xl md:text-5xl font-bold text-primary">Easy to use</h1>
                <ul className="mt-[12px]">
                    <li>Mobile first web application for accessibility.</li>
                </ul>
            </div>
            <div className="my-[30px] md:mt-[70px]">
                <h1 className="text-3xl md:text-5xl font-bold text-primary">Community maintained</h1>
                <ul className="mt-[12px]">
                    <li>Maintained by professional web developers locally.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
