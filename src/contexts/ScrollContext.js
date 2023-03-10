import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';


export const ScrollContext = createContext();

const ScrollContextProvider = (props) => {
    const [scrollDir, setScrollDir] = useState("scrolling down");

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;
      
        const updateScrollDir = () => {
          const scrollY = window.pageYOffset;
      
          if (Math.abs(scrollY - lastScrollY) < threshold) {
            ticking = false;
            return;
          }
          setScrollDir(scrollY > lastScrollY ? false : true);
          lastScrollY = scrollY > 0 ? scrollY : 0;
          ticking = false;
        };
      
        const onScroll = () => {
          if (!ticking) {
            window.requestAnimationFrame(updateScrollDir);
            ticking = true;
          }
        };
      
        window.addEventListener("scroll", onScroll);
        console.log(scrollDir);
      
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollDir]);

    return ( 
        <ScrollContext.Provider value={scrollDir}>
            {props.children}
        </ScrollContext.Provider>
     );
}
 
export default ScrollContextProvider;