import Section from "../components/Section"

function About() {
    return (
    
    <Section id="about" className='bg-lightPurple dark:bg-black'>
         
            <div className='z-20 row-start-1 md:row-start-2 col-start-2'>
                    <h2 className=' font-bold font-monsterrat text-7xl md:text-9xl'>Who <span className=' italic font-spectral'>Am</span> I?</h2>
            </div>
            
            <div className='z-10 font-monsterrat col-start-2 row-start-3 md:row-start-4 lg:col-start-3 col-span-10 lg:col-span-8 text-xl text-center'>
            <span className='font-bold italic font-monsterrat text-2xl'>As A FrontEnd Developer,</span>
            <p className='lg:py-6 font-spectral'>
            I create experiences that bring people together. Web Development exists at an intersection between design and technology. My passion for these subjects, and the desire to make information more accesible to those in need has driven me throughout my career.
            
            </p>
            </div>
    </Section>
            
        
    )
}

export default About