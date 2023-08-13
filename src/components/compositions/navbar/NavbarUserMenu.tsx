import { useState } from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "../../ui/Popover/Popover"
import { AvatarIcon } from "@radix-ui/react-icons"
 
   
  export function NavbarUserMenu() {
    const [openPopover, setOpenPopover] = useState(false)

    return (
      <Popover open={openPopover} onOpenChange={setOpenPopover}>
      <PopoverTrigger>
        <div className="flex items-center justify-center">
        <AvatarIcon className="h-7 w-7" />
        </div>
      </PopoverTrigger>
        <PopoverContent align="end" className="bg-white px-0 py-1">
            <ul>
                <li className="py-2 px-3 cursor-pointer hover:bg-slate-100">Account</li>
                <li className="py-2 px-3 cursor-pointer hover:bg-slate-100">Review History</li>
                <li className="py-2 px-3 cursor-pointer hover:bg-slate-100">Logout</li>
            </ul>
        </PopoverContent>
      </Popover>
    )
  }
 