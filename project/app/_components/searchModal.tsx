import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { CommandComp } from "./commands"
export function SearchModal() {
  return (
  <Dialog>
    <DialogTrigger asChild>
    <Button variant="ghost"><MagnifyingGlassIcon viewBox="0 0 15 15" height={20} width={20}/>Search...</Button>
    </DialogTrigger>
    <DialogContent className="sm:w-full ">
    <CommandComp></CommandComp> 
    </DialogContent>
  </Dialog>
  )
}
