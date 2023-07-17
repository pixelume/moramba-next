import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow
} from "@/components/ui/tooltip"

interface TooltipWrapperProps {
  children: React.ReactNode
  content: React.ReactNode
}

export const TooltipWrapper = ({children, content}: TooltipWrapperProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          {content}
          <TooltipArrow className="fill-primary"/>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
