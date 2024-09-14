import Link from "next/link"

import {
  Menubar,
  
} from "@/components/ui/menubar"
import { ModeToggle } from "./modeToggle"
import { SearchModal } from "./searchModal"
import { MenuLogo } from "./MenuLogo"
import { auth } from "@/auth"

export default async function Header() {
  const session = await auth();
return (
  <div className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <Menubar className="container flex h-14 max-w-screen-2xl items-center">
    <Link href='/' className="mx-4 hidden md:flex">INTALKER</Link>

    <MenuLogo session={session}></MenuLogo>
    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
    <SearchModal />
    <ModeToggle />
    </div>
  </Menubar>
  
  </div>
);
}
