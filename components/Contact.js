import Section from "../components/Section"
import Link from "next/link"
import Icons from '../components/Icons'

function Contact() {
    return (
    
    <Section id="contact" className='bg-gradient-to-t from-purple to-lightPurple dark:to-black'>
         
            <div className='z-20 row-start-1 md:row-start-2 col-start-2 md:col-start-3 lg:col-start-2 text-6xl md:text-7xl font-monsterrat font-bold pt-5'>
              Where To Reach Me?
            </div>
            <div className='row-start-4 col-start-2 col-span-10 text-center font-spectral md:text-xl lg:col-start-4 lg:col-span-6'>
              I am currently looking for new opportunities. If you think I would be a good fit for your project, feel free to contact me via <span className='underline underline-offset-1'>E-mail</span> or <span className='underline underline-offset-1'>LinkedIn</span>.
            </div>
            <div className='relative row-start-5 flex row-span-1 col-start-5 md:border-b-2 border-zinc-900 dark:border-white col-span-4 justify-between'>
              <Link href='mailto:johnathan.a.manney@gmail.com'>
              <a  target='_blank' className='hover:scale-110 hover:ease-linear'>
                <Icons name='email' className='bottom-0 h-1/2 md:h-full w-1/2 mx-auto dark:fill-white'/>
              </a>
              </Link>
              <Link href='https://www.linkedin.com/in/johnathan-manney-227589215/'>
              <a target='_blank' className='hover:scale-110 hover:ease-linear'>
                <Icons name='linkedin' className='bottom-0 h-1/2 md:h-full w-1/2 mx-auto dark:fill-white'/>
              </a>
              </Link>
            </div>
            <div className='flex justify-center row-start-6 col-start-6 col-span-2 '>
              <Link href='https://github.com/Nonnewtonianjam/Portfolio-v2'>
                <a className='lg:w-1/3 dark:fill-white'>
                  <Icons name='github'/>
                </a>
              </Link> 
            </div>
    </Section>
            
        
    )
}

export default Contact


