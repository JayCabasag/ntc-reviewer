import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link to="/" >
          <a className=" cursor-pointer">
            <h1 className="flex no-underline">
              <span className="text-xl font-primary font-bold tracking-tight pt-1">
                NTC Reviewer
              </span>
            </h1>
          </a>
        </Link>
        <div>
          <Link
            to="/cart"
          >
            <a className=" relative" aria-label="cart">
              
            </a>
          </Link>
        </div>
      </div>
    </header >
  )
}
