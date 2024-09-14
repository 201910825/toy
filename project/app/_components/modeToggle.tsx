"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import DarkGit from '@/public/assets/Github_dark.svg'
import LightGit from '@/public/assets/github_light.svg'


export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
  setMounted(true)
  }, [])

  if (!mounted) return null

  return (
  <DropdownMenu>
    <Link href={'https://github.com/201910825/toy'}>
    {theme === 'light' ? <Image src={LightGit} width={56} alt="GitHub" /> : <Image src={DarkGit} width={56} alt="GitHub" />}
    </Link>
    <DropdownMenuTrigger asChild>
    <Button variant="outline" size="icon">
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
    <DropdownMenuItem onClick={() => setTheme("light")}>
      Light
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("dark")}>
      Dark
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("system")}>
      Default
    </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
