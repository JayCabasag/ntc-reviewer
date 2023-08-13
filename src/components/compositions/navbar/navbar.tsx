import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white border-b sticky top-0 z-20 ">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 h-[65px]">
        <Link to="/" className="cursor-pointer" >
            <h1 className="flex no-underline">
              <span className="text-xl text-[#212121] font-primary font-extrabold tracking-tight pt-1">
                Exam License Online
              </span>
            </h1>
        </Link>
        <div>
          {/* Add Account here */}
        </div>
      </div>
    </header >
  )
}
