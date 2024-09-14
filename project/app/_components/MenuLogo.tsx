'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/MenuToggle"
import { LinkItem } from "./LinkItem"
import { ProfileImg } from "../(dashboard)/dashboard/_components/avatar";

import MobileMenu   from '@/public/assets/mobileMenu'
import calendarImg  from '@/public/assets/icons/calendar.svg';
import tasksImg   from '@/public/assets/icons/tasks.svg';
import extensionImg from '@/public/assets/icons/extensions.svg';
import contractImg  from '@/public/assets/icons/contract.svg';

export function MenuLogo({session}) {
  const path = usePathname();
  return (
  <Dialog>
    <DialogTrigger asChild>
    <Button variant="outline" className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden" >
      <MobileMenu stroke="currentColor" />
    </Button>
    </DialogTrigger>
    <DialogContent className="w-3/4">
    <div className="grid gap-6 py-4">
      <div className="items-center">
      <Link href='/'>INTALKER</Link>
      <ProfileImg src={session && session.user ? session.user.image : ''}/>{session && session.user ? session.user.name : ''}
      </div>
      <div className="flex flex-col items-start gap-4">
      <LinkItem to="/dashboard"      icon={calendarImg}  text="이벤트 생성"  isClicked={path === "/dashboard"}   />
      <LinkItem to="/dashboard/schedule"   icon={tasksImg}   text="일정 관리"  isClicked={path === "/dashboard/schedule"} />
      <LinkItem to="/dashboard/contract"   icon={contractImg}  text="근로계약 관리" isClicked={path === "/dashboard/contract"} />
      <LinkItem to="/dashboard/extensions" icon={extensionImg} text="확장 앱" isClicked={path === "/dashboard/extensions"} />
      </div>
    </div>
    </DialogContent>
  </Dialog>
  )
}
