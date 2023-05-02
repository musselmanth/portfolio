import { useEffect, useRef, useState } from "react";

const useWindowScrolled = threshold => {
  const [isScrolled, setIsScrolled] = useState(document.documentElement.scrollTop >= threshold)
  const prevScrollAmt = useRef(document.documentElement.scrollTop)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollAmt = document.documentElement.scrollTop
      if (currentScrollAmt >= threshold && prevScrollAmt.current < threshold){
        setIsScrolled(true)
      } else if (currentScrollAmt < threshold && prevScrollAmt.current >= threshold) {
        setIsScrolled(false)
      }
      prevScrollAmt.current = currentScrollAmt
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return isScrolled
}

export default useWindowScrolled