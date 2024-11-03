'use client'
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image, { StaticImageData } from "next/image";

import { ShimmerBtn } from "./_components/shimmer-btn";
import GradualSpacing from "@/components/ui/animatedTitle";
import LandingImg1 from "@/public/assets/background/landingImg1.png"
import LandingImg2 from "@/public/assets/background/landingImg2.png"
import { AnimatedGridPattern } from "./_components/landBg";
import { AniList } from "./_components/LandingList";
import VirtualPhone from "./_components/virtualPhone";


export default function Home() {
  const isDesktop = useMediaQuery({ query: "(min-width: 800px)" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
  setIsClient(true);
  }, []);

  if (!isClient) {
  return null; // or a loading spinner, or some placeholder
  }

  return (
  <div>
    <AnimatedGridPattern/>
    <div className="min-w-full flex flex-col h-full justify-center items-center">
    <div className={`w-4/5 flex font-extrabold justify-evenly mt-5 ${isDesktop ? 'flex-row items-center':'flex-col justify-center'}`}>
      <div className="h-screen content-center">
      <GradualSpacing
      className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="INTALKER,"
      />
      <GradualSpacing
      className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="Feel Free."
      />
      <GradualSpacing
      className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="면접을"
      />
      <GradualSpacing
      className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="편하게 만들다."
      />
      <ShimmerBtn/>
      </div>
      {/* <Bento/> */}
    </div>
    </div>
    
    <div className="relative mx-auto w-full max-w-[1440px] px-4 md:px-[34px] pt-10 my-4">
      <h2 className="font-cal leading-[100%] md:!leading-h1 text-[40px] tracking-[-0.015em] md:text-6xl lg:text-[70px] xl:text-[70px] mb-10 md:text-center">
        비대면 알바 모집 플랫폼
      </h2>
      <div className="flex flex-col gap-y-8 md:grid md:grid-flow-row md:grid-cols-6 md:gap-x-6">
        <GridItem imgWidth="1200px" colSpan="3" icon={LandingImg1} width={1144} height={505} mainText="간편하게 면접 일정을 관리합니다" text="알바생에게 링크를 공유하면 그 중 가능한 날짜 조율이 가능합니다." />
        <GridItem imgWidth="1200px" colSpan="3" icon={LandingImg2} width={400} height={205} mainText="휴대폰이나 데스트탑으로 근로계약서를 관리합니다" text="근로계약서 파일의 관리가 간편합니다." />
        
        <GridItem imgWidth="500px" colSpan="3" width={300} height={205} mainText="면접을 비대면으로 간편하게" text="개인 화상 대화로 면접이 가능합니다." >
        <AniList/>
        </GridItem>
      </div>
      <div className="w-full flex justify-center items-center">
        <VirtualPhone/>
        <h2 className="hidden md:block">mobile Intalker App도 있습니다.</h2>
      </div>
      
    </div>
  </div>
  
  );
}


function GridItem({ icon, mainText, text, imgWidth , width, height, colSpan, children }: {imgWidth: string,  colSpan: string, icon?: StaticImageData, mainText: string, text: string, width?: number, height?: number,children?: React.ReactNode }) {
  return (
    <div className={`class="border-primary-700 relative w-full overflow-hidden rounded-2xl border-2 border-l-[17px] col-span-${colSpan}`}>
      <div className="relative h-[276px] w-full overflow-hidden object-cover duration-500 rounded-3xl bg-[radial-gradient(121.58%_100%_at_276px_170px,_#8690a6_0%,_#d5d5d6_100%)]">
        <div className={`absolute bottom-0 top-8 z-10 mx-8 -mb-40 w-[${imgWidth}] xl:left-32`}>
        {icon && (<Image
            alt=""
            src={icon}
            width={width}
            height={height}
            className={`rounded-t-3xl border-primary-700 w-[${width}px] h-[${height}px] fixed-size`} // Apply custom class
          />)}
          {children}
        </div>
      </div>
      <div className="border-primary-700 flex flex-col min-h-[200px] place-content-between border-t-2 border-dashed p-5 pb-8 pt-5 md:flex-row md:gap-4 md:px-8 md:pb-10">
        <span className="text-[700w] pt-1 md:text-[32px]">{mainText}</span>
        <span className="max-w-[350px] text-base md:text-start md:leading-snug">{text}</span>
      </div>
    </div>
  );
}