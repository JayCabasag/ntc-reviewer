import { forwardRef } from "react"
import { ButtonProps, buttonVariants } from "./styles"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild, ...props}, ref) => {

 const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
})

Button.displayName = "Button"

export default Button