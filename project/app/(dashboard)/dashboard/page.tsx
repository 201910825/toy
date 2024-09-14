
import { Modal } from "@/app/(dashboard)/dashboard/_components/createModal";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";

import calendarImage from "@/public/assets/icons/calendar.svg"
export default function aef(){

  return(
    <div className="container flex flex-col items-start md:gap-6 ">
      <div className="w-[90%] h-[50vh] flex flex-col justify-evenly items-center">
        <div className="w-[72px] h-[72px] rounded-full bg-gray-400 items-center justify-center flex">
          <Image src={calendarImage} alt="icon" width={40} height={40} />
        </div>
        <div className="text-center">
          <h2>이벤트 생성하기</h2> <br />
          <p>사장님이 원하는 시간대를 설정하여 알바생과의 새로운 면접 일정을 생성해보세요</p> 
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost">생성</Button>
          </DialogTrigger>
          <DialogContent className="sm:w-full ">
            <Modal/>
          </DialogContent>
        </Dialog>
      </div>
      
    </div>
  );
}



