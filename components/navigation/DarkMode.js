import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Icons from '../Icons'

const DarkMode = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <div className='h-6 w-6 origin-center md:rotate-90'>
            <button className='fill-black dark:fill-white' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} >
                <Icons name={theme === 'light' ? 'moon' : 'sun'} />    
            </button>
        </div>
    )
}

export default DarkMode

