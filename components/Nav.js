import { Link } from "react-scroll"
import { NavTitles } from './navigation/NavTitles'
import DarkMode from "./navigation/DarkMode"

export default function contact() {

  
    return (
      <div className='z-30 fixed w-full pb-4 pt-6 bottom-0 md:bottom-full md:right-0 bg-white dark:bg-slate-500 dark:md:bg-transparent md:bg-transparent md:transform md:origin-bottom-right md:-rotate-90 md:w-[calc(100vh)] topShadow'>
        <div className='flex text-sm italic font-bold md:text-xl font-monsterrat justify-around '>    
          {NavTitles.map((nav, index) =>    
              <Link key={index} 
                    to={`${nav.link}`} 
                    spy={true} smooth={true} 
                    activeClass="active" 
                    className='px-2 relative w-max underlineHover group'>
                  <span><span>{nav.title}</span><span className='invisible group-hover:visible transition-all'>?</span></span>
                  <span className='absolute -bottom-1 left-0 w-0 transition-all h-1 bg-black dark:bg-white'></span>
            </Link>
            )}
            <DarkMode/>
        </div>
        
      </div>
    )
  }

  //