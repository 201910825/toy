import { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"

export default function Component(){

	// useMediaQuery ?์ ?ตํด ?์ฌ ๋ธ๋ผ?ฐ์???๋ทฐํฌ?ธ๊? ์ต๋? 1024px?ธ์? ?์ธ?๋ ๋ถ๋ฆฌ???ํ??๋ณ?๋? ?์ฑ?๋ค.
	const isDesktop = useMediaQuery({
 	 query: "(min-width: 1024px)"
	})
  
  // ?ดํ useState ?์ ?ตํด ?ด๋น ์ปดํฌ?ํธ?์ desktop ๋ทฐํฌ?ธ์ธ์ง ?๋ณ?????๋๋ก??ํ๋ฅ?? ์ธ?๋ค.
  const [desktop, setDesktop] = useState(false);
  
  // useEffect ?์ ?ตํด useMediaQuery๋ก?? ์ธ??๋ถ๋ฆฌ???ํ??๋ณ?๊? ๋ณ๊ฒฝ๋๋ฉ??ด๋น ์ปดํฌ?ํธ???ํ๊ฐ ๋ณ?๋๊ฒ??ค์ ?๋ค.
  useEffect(() => {
  setDesktop(isDesktop)
  }, [isDesktop])
  
  return (
  	desktop && <Component />
  )
}
