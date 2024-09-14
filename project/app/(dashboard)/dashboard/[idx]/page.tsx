'use client'
import { useDateStore } from "@/store/useDateStore";
import { DatePick } from "./_components/dataPick";
import ScheduleTime from "./_components/scheduleTime";


export default function ManageComponent() {
  const {selectedDate} = useDateStore()
  return (
      <div className="w-full h-[80vh] pt-4 flex flex-col items-center">
        <div className="w-full flex justify-evenly">
          <DatePick/>
        </div>
        {
          (selectedDate!=='') ? <ScheduleTime day={selectedDate}/> : ''
        }
      </div>
  );
};

