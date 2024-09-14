'use client'
import * as React from "react";
import { usePathname } from "next/navigation";

import { ProfileImg } from "./avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { LinkItem } from "@/app/_components/LinkItem";

import calendarImg  from '@/public/assets/icons/calendar.svg';
import tasksImg   from '@/public/assets/icons/tasks.svg';
import extensionImg from '@/public/assets/icons/extensions.svg';
import contractImg  from '@/public/assets/icons/contract.svg';

  
export default function SideBar({session}){
  const path = usePathname();
  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r-gray-700 border-r">
      <div className="relative w-full overflow-hidden h-full py-6 pr-6 lg:py-8">
      <ProfileImg src={session && session.user ? session.user.image : ''}/>{session && session.user ? session.user.name : ''}
      <ScrollArea className="h-72 w-full">
        <div className="h-full w-full rounded-[inherit]">
          <br className="mb-4 text-sm font-medium leading-none"></br>
          <LinkItem to="/dashboard"      icon={calendarImg}  text="이벤트 생성"  isClicked={path === "/dashboard"}   />
          <Separator className="my-2" />
          <LinkItem to="/dashboard/schedule"   icon={tasksImg}   text="일정 관리"  isClicked={path === "/dashboard/schedule"} />
          <Separator className="my-2" />
          <LinkItem to="/dashboard/contract"   icon={contractImg}  text="근로계약 관리" isClicked={path === "/dashboard/contract"} />
          <Separator className="my-2" />
          <LinkItem to="/dashboard/extensions" icon={extensionImg} text="확장 앱" isClicked={path === "/dashboard/extensions"} />
          <Separator className="my-2" />
        </div>
      </ScrollArea>
      </div>
    </aside>
  )
}

