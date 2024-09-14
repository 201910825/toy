'use client'
import React, { useState } from "react"
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  AlertDialog, 
  AlertDialogContent, 
  AlertDialogHeader, 
  AlertDialogFooter, 
  AlertDialogTitle, 
  AlertDialogDescription, 
  AlertDialogAction, 
} from "@/components/ui/alert-dialog"

export function Modal() {
  const [alertMessage, setAlertMessage] = useState('');
  const [title,setTitle] = useState('')
  const [pw,setPw] = useState('')
  const [minutes, setMinutes] = useState('')
  const [alertOpen, setAlertOpen] = useState(false);
  const router = useRouter()
  const idx = new Date();

  const onChangeHandler = (setter,value)=>{
    setter(value)
  }

  const manageHandler = (title:string,pw:string,minutes:string) =>{
    if(title===''||pw===''||minutes===''){
      setAlertOpen(true);
      setAlertMessage('올바르게 입력해주세요!');
      return
    }
    const queryParams = new URLSearchParams({
        title,
        pw,
        minutes: minutes.toString()
      });
      router.push(`/dashboard/${idx}?${queryParams.toString()}`);
  }

  return (
  <Card className="w-full">
    <CardHeader>
    <CardTitle>일정 추가</CardTitle>
    <CardDescription>알바생들이 면접 시간을 예약할 수 있는 <br /> 새 일정을 생성해요</CardDescription>
    </CardHeader>
    <CardContent>
    <form>
      <div className="grid w-full items-center">
      <div className="flex flex-col space-y-1.5 mb-2">
        <Label htmlFor="name">제목</Label>
        <Input id="name" value={title} placeholder="일정 제목" onChange={(e)=>onChangeHandler(setTitle,e.target.value)} />
      </div>
      <div className="flex flex-col space-y-1.5 mb-2">
        <Label htmlFor="name">비밀번호</Label>
        <Input id="name" placeholder="접속 비밀번호" onChange={(e)=>onChangeHandler(setPw,e.target.value)} />
      </div>
      <div className="flex flex-col space-y-1.5 mb-2">
        <Label htmlFor="minutes">시간(분)</Label>
        <Select onValueChange={(value) => setMinutes(value)}>
        <SelectTrigger id="minutes">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="15">15</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="25">25</SelectItem>
          <SelectItem value="30">30</SelectItem>
        </SelectContent>
        </Select>
      </div>
      </div>
    </form>
    </CardContent>
    <CardFooter className="flex justify-center">
    <Button onClick={()=>manageHandler(title,pw,minutes)}>생성하기</Button>
    </CardFooter>
    <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>오류</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            {alertMessage}
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setAlertOpen(false)}>알겠습니다.</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  </Card>
  )
}
