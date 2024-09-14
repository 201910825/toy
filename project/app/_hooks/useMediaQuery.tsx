import { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"

export default function Component(){

	// useMediaQuery ?�을 ?�해 ?�재 브라?��???뷰포?��? 최�? 1024px?��? ?�인?�는 불리???�태??변?��? ?�성?�다.
	const isDesktop = useMediaQuery({
 	 query: "(min-width: 1024px)"
	})
  
  // ?�후 useState ?�을 ?�해 ?�당 컴포?�트?�서 desktop 뷰포?�인지 ?�별?????�도�??�태�??�언?�다.
  const [desktop, setDesktop] = useState(false);
  
  // useEffect ?�을 ?�해 useMediaQuery�??�언??불리???�태??변?��? 변경되�??�당 컴포?�트???�태가 변?�되�??�정?�다.
  useEffect(() => {
  setDesktop(isDesktop)
  }, [isDesktop])
  
  return (
  	desktop && <Component />
  )
}