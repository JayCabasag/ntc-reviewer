import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 h-[65px]">
        <Link to="/" >
          <a className=" cursor-pointer">
            <h1 className="flex no-underline">
              <span className="text-xl font-primary font-bold tracking-tight pt-1">
                NTC Reviewer (Unofficial)
              </span>
            </h1>
          </a>
        </Link>
        <div>
          {/* Add Account here */}
        </div>
      </div>
    </header >
  )
}
