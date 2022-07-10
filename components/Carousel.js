import { useState } from 'react'
import { SlideData } from './SlideData'
import Icons from './Icons'

const Carousel = ({slides}) => {
    
  const [current, setCurrent] = useState(0)
  const [touchPosition, setTouchPosition] = useState(null)
  const length = slides.length
  
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const dotControl = (index) => {
    setCurrent(index)
  }

  const handleTouchStart = (el) => {
    const touchDown = el.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (el) => {
    const touchDown = touchPosition

    if(touchDown === null) {
        return
    }

    const currentTouch = el.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
        nextSlide()
    }

    if (diff < -5) {
        prevSlide()
    }

    setTouchPosition(null)
  }


                   
  return (
    <div className='flex z-10 relative col-start-2 md:col-start-3 col-span-10 md:col-span-8 row-start-2 row-span-4 my-16 justify-between'>
        
        {/*carousel inner content */}
        <div className='invisible md:visible z-10 my-auto cursor-pointer' onClick={prevSlide}>
            <span className='text-7xl'>
                &#60;
            </span>
        </div>
        
        <div className='z-10 w-full lg:w-1/2 relative my-auto'>
            {SlideData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} 
                         key={index}
                         onTouchStart={handleTouchStart}
                         onTouchMove={handleTouchMove}>
                        {index === current && (<Icons  name={slide.icons} className='w-fit dark:fill-white'/>)}
                    </div>
                )
            })}
        </div>
        <div className='invisible md:visible z-10 my-auto cursor-pointer' onClick={nextSlide}>
            <span className='text-7xl'>
                &#62;
            </span>
        </div>
        {/*Dots*/}
        <div className='flex lg:hidden absolute justify-center bottom-0 left-0 right-0 text-7xl m-5'>
            {SlideData.map((slide, index) => (
                <div key={index}
                     className={`${index === current ? 'text-white dark:text-slate-800' : 'text-black dark:text-white'}`}
                     onClick={() => dotControl(index)}
                     >.</div>
            ))}
        </div>
        {/*Background render*/}
        <div className='z-0 absolute left-0 right-0  bottom-20 md:bottom-1/2 lg:left-10 lg:right-10 opacity-10'>
        {SlideData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} 
                         key={index}>
                        {index === current && (<Icons name={slide.background} className='w-fit fill-black dark:fill-slate-300'/>)}
                    </div>
                )
            })}
        </div>
    </div>
       
  )
  
}

export default Carousel