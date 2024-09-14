'use client'
import React, { useState } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';

import { useDateStore, usePostStore } from '@/store/useDateStore';

import ScheduleBox from './scheduleBox';
import { Button } from '@/components/ui/button';

interface ScheduleTimeProps {
  day: string;
}

interface TimeBlock {
  id: number | 0;
  startTime: string | null;
  endTime: string | null;
}
interface Submit {
  isValid : boolean|false;
}
const generateTimeOptions = () => {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
      const formattedHour = hour.toString().padStart(2, '0');
      times.push(`${formattedHour}:00`);
      times.push(`${formattedHour}:30`);
  }
  return times;
}

const ScheduleTime = ({ day }: ScheduleTimeProps) => {
  const {selectedDate} = useDateStore()
  const {setPostDate}  = usePostStore();
  const [isValid, setIsValid] = useState<Submit['isValid']>(true)
  console.log(isValid)
  const [timeBlocks, setTimeBlocks] = useState<TimeBlock[]>([]);
  const handleAddTimeBlock = () => {
    setTimeBlocks([...timeBlocks, { id: Date.now(), startTime: null, endTime: null }]);
    setIsValid(true);
  };

  const handleStartTimeChange = (id: number, value: string) => {
    setTimeBlocks(timeBlocks.map(block => 
    block.id === id ? { ...block, startTime: value } : block
    ));
  };

  const handleEndTimeChange = (id: number, value: string) => {
    if(value!==''){
        setIsValid(false);
    }
    else setIsValid(true);
    setTimeBlocks(timeBlocks.map(block => 
    block.id === id ? { ...block, endTime: value } : block
    ));
    
  };
  const handleSubmit = () => {
    setPostDate(timeBlocks, selectedDate);
  };

  return (
    <div className="flex flex-col items-center justify-evenly w-full h-[50vh] mt-5">
      <p className="font-bold">{day}</p>
      <div className="flex items-center justify-evenly w-1/2">
        <Button onClick={handleAddTimeBlock}>
            추가
        </Button>
        <Button onClick={handleSubmit} disabled={isValid} className="flex items-center">
            <span className="pr-1">저장</span><CheckIcon/>
        </Button>
      </div>
      <div className="flex flex-col items-center w-4/5 h-full border border-gray-300 p-1.5 rounded-lg overflow-y-auto overflow-x-hidden">
        {timeBlocks.map((block, idx) => (
        <ScheduleBox 
            key={idx}
            block={block}
            timeOptions={generateTimeOptions()}
            onStartTimeChange={handleStartTimeChange}
            onEndTimeChange={handleEndTimeChange}
        />
        ))}
      </div>
    </div>
  );
}

export default ScheduleTime;