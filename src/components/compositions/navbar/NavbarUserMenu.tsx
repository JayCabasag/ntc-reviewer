import { useState } from "react"
import { Popover, PopoverTrigger, PopoverContent} from "@/components/ui/Popover/Popover"
import { AvatarIcon } from "@radix-ui/react-icons"
 
   
  export function NavbarUserMenu() {
    const [openPopover, setOpenPopover] = useState(false)

    return (
      <Popover open={openPopover} onOpenChange={setOpenPopover}>
      <PopoverTrigger>
        <div className="flex items-center justify-center">
        <AvatarIcon className="h-8 w-8" />
        </div>
      </PopoverTrigger>
        <PopoverContent align="end" className="bg-white px-0 py-2">
            <ul>
                <li className="py-2 px-3 cursor-pointer hover:bg-slate-100 text-[12px] md:text-base text-gray-600">Account</li>
                <li className="py-2 px-3 cursor-pointer hover:bg-slate-100 text-[12px] md:text-base text-gray-600">Review History</li>
                <li className="py-2 px-3 cursor-pointer hover:bg-slate-100 text-[12px] md:text-base text-gray-600">Logout</li>
            </ul>
        </PopoverContent>
      </Popover>
    )
  }
 