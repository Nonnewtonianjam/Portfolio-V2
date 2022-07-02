import Image from "next/image"
import Section from "../components/Section"
import Data from "../components/ProjectData"
import { useState } from 'react'
import Modal from '../components/Modal'




function Projects() {
        //modal logic
        const [showModal, setShowModal] = useState(false)
        const [selectedProject, setSelectedProject] = useState(null)

        const expandModal = (item) => {
                setSelectedProject(item)
                setShowModal(true)
        }
        
        const handleOnClose = () => {
                setShowModal(false)
                setSelectedProject(null)
        }

        return (
        <>
          
          <Modal onClose={handleOnClose} visible={showModal}>{selectedProject}</Modal>

          <div id="projects" className='h-36 pl-6 md:pl-24 lg:pt-12 bg-lightPurple dark:bg-black'>
                  <h2 className='font-bold font-monsterrat text-7xl md:text-9xl'>What <span className=' italic font-spectral'>I</span> Do</h2>
          </div>
          
          {
                Data && Data.map((item) =>
                <Section className='bg-lightPurple dark:bg-black' key={item.id}>
                        <div className='relative z-20 font-bold font-monsterrat text-4xl md:text-5xl xl:text-7xl col-start-2 col-span-full row-span-1'>
                                <h2 className="absolute bottom-0">{item.name}</h2>
                        </div>
                        
                        <div className='z-10 relative row-start-2 col-span-12 row-span-2 md:row-span-3 text-center'>
                                <Image src={ item.img } layout='fill' objectFit='contain' alt={item.alt}   />
                        </div>

                        <div className='relative font-spectral col-start-2 xl:col-start-3 col-span-10 row-start-4 md:row-start-5 xl:col-span-8 text-center mt-4'>
                                <span className='italic font-spectral'>{item.tags}</span>
                                <p className='text-xl mt-4'>{item.excerpt}</p>
                                <div className='absolute text-sm font-monsterrat right-0 my-4 py-2 px-8'>
                                        <button className='button' 
                                                onClick={() => expandModal(
                                                        <div className=' flex-col'> 
                                                        <h1 className='pl-4 pb-20 font-bold text-6xl'>{item.name}</h1>
                                                        <h2 className='pl-4 font-bold text-4xl'>Additional Thoughts</h2>
                                                        <div className='p-4 md:text-xl'>{item.desc}</div>

                                                        </div>
                                                        )}>
                                                                Details
                                        </button>
                                </div>
                        </div>
                        
                        
                </Section>
                        
                )
          }
             
        </>    
  )
}

export default Projects