import { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"

export default function Component(){

	// useMediaQuery ?…ì„ ?µí•´ ?„ìž¬ ë¸Œë¼?°ì???ë·°í¬?¸ê? ìµœë? 1024px?¸ì? ?•ì¸?˜ëŠ” ë¶ˆë¦¬???•íƒœ??ë³€?˜ë? ?ì„±?œë‹¤.
	const isDesktop = useMediaQuery({
 	 query: "(min-width: 1024px)"
	})
  
  // ?´í›„ useState ?…ì„ ?µí•´ ?´ë‹¹ ì»´í¬?ŒíŠ¸?ì„œ desktop ë·°í¬?¸ì¸ì§€ ?ë³„?????ˆë„ë¡??íƒœë¥?? ì–¸?œë‹¤.
  const [desktop, setDesktop] = useState(false);
  
  // useEffect ?…ì„ ?µí•´ useMediaQueryë¡?? ì–¸??ë¶ˆë¦¬???•íƒœ??ë³€?˜ê? ë³€ê²½ë˜ë©??´ë‹¹ ì»´í¬?ŒíŠ¸???íƒœê°€ ë³€?”ë˜ê²??¤ì •?œë‹¤.
  useEffect(() => {
  setDesktop(isDesktop)
  }, [isDesktop])
  
  return (
  	desktop && <Component />
  )
}
