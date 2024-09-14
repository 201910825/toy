import Image from "next/image"
import Link from "next/link"


export function LinkItem ({to, icon, text, isClicked}: {to: string, icon: any, text: string, isClicked: boolean}) {
  return (
    <div className="w-full">
      <Link href={to}>
        <div className={`flex items-center justify-start space-x-3 h-[32px] pl-[8px] rounded-[10px] ${isClicked ? 'bg-[#e4e7eb] text-black' : ''}`}>
          <Image src={icon} width={16} height={16} alt="icon" />
          <p className="text-[14px]">{text}</p>
        </div>
      </Link>
    </div>
  )
}
