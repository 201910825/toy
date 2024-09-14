import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  } from "@/components/ui/avatar"
  
  export function ProfileImg({src}) {
  return (
    <Avatar className="flex">
    <AvatarImage src={src} alt="user" />
    <AvatarFallback>User</AvatarFallback>
    </Avatar>
  )
  }
  
