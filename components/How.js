import Section from './Section'
import Carousel from './Carousel'
import { SlideData } from './SlideData'


const How = () => {
    return (
        <Section id="skills" className='bg-lightPurple dark:bg-black'>
        <div className='z-20 row-start-1 col-span-full text-center'>
            <h2 className=' font-bold font-monsterrat xs:text-7xl text-8xl md:text-9xl'>How <span className=' italic font-spectral'>It&#39;s</span> Done</h2>
        </div> 
            <Carousel slides={SlideData}/>  
        </Section>
    )
}

export default How