import { AvatarIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white border-b sticky top-0 z-20 ">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 h-[65px]">
        <Link to="/" className="cursor-pointer" >
            <h1 className="flex no-underline">
              <span className="text-xl text-primary font-primary font-extrabold tracking-tight pt-1">
                Exam License Online
              </span>
            </h1>
        </Link>
        <div className="flex gap-2 items-center">
          <div className="hidden gap-2 md:flex">
            <strong className="text-primary">Create an account</strong>
             or 
             <strong className="text-primary">Login</strong>
          </div>
          <AvatarIcon className="h-7 w-7 cursor-pointer" />
        </div>
      </div>
    </header >
  )
}
