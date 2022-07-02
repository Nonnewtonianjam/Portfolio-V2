
const Section = ({children, className = '', id = ''}) => {
    return (
        <div className={`overflow-x-hidden mx-auto ${className} ${id}`}>
            <div className='relative h-screen grid grid-cols-12 grid-rows-6 gap-4 mx-7 justify-center'>
                {children}  
            </div>
        </div>
    )
}

export default Section