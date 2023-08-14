import { Link } from "react-router-dom";
import EloLogo from "@/components/assets/ELOLogo";
import Button from "@/components/ui/button/Button";
// import { NavbarUserMenu } from "./NavbarUserMenu";

export default function Navbar() {
  return (
    <header className="bg-white border-b sticky top-0 z-20 ">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 h-[65px]">
        <Link to="/" className="cursor-pointer" >
            <h1 className="flex no-underline items-center gap-2">
              <EloLogo className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"/>
              <span className="text-xl tracking-widest text-primary font-primary font-extrabold pt-1">
                ELO
              </span>
            </h1>
        </Link>
        <div className="flex gap-2 items-center">
          <Button variant='outline'>Sign in</Button>
          <Button className="text-white">Sign up</Button>
          {/* <NavbarUserMenu /> */}
        </div>
      </div>
    </header >
  )
}
