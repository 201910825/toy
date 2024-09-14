import ShimmerButton from "@/components/ui/shimmerbtn";

import { signIn} from "next-auth/react"
export function ShimmerBtn() {

  return (

  <div className="z-10 flex min-h-[16rem] items-center justify-center">

    <ShimmerButton onClick={() => signIn("kakao", { redirect: true, callbackUrl: "/dashboard" })} className="shadow-2xl w-[270px] hover:cursor-pointer hover:shadow-lg group">
    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
      GET STARTED

    </span>
    <span className="hidden group-hover:block ml-2 text-white"><p></p></span>

    </ShimmerButton>
  </div>
  );

}
