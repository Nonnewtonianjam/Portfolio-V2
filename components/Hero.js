
import Icons from './Icons'
import Section from './Section'

const Hero = () => {
  return (
    <Section className='bg-gradient-to-b from-purple to-lightPurple dark:to-black'>
      <div className='block col-span-full row-span-full'>
        <Icons className='z-0 opacity-10' name='heroBg' />
      </div>
      <div className='z-20 col-start-2 col-span-10 row-start-2 row-span-2'>
        <h1 className='neon font-monsterrat italic font-bold text-6xl md:8xl lg:text-9xl'>I&#39;m Johnathan Manney,</h1>
        <p className=' text-white text-3xl pt-2 md:pt-6 md:pl-4 font-bold'>The answer to your development questions.</p>
      </div>
        
    </Section>
  )
}

export default Hero