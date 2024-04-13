import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
    const URL = "https://www.google.com/search?sca_esv=e578d9453acfd45f&sxsrf=ACQVn0_UHrOrAM2196fi_O0pkRmqC_Qzzg:1713001050797&q=apple+store+in+delhi+google+map&npsic=0&rflfq=1&rldoc=1&rllag=28582234,77234843,6148&tbm=lcl&sa=X&ved=2ahUKEwiwtoeZ8r6FAxVBbvUHHYBoDv8QtgN6BAgVEAE&biw=1536&bih=742&dpr=1.25#rlfi=hd:;si:;mv:[[28.843123389673426,77.85928049667972],[28.12129587757409,76.32668772324222]]"
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className='screen-max-width'>
            <p className='font-semibold text-[#86868b] text-xs'>
                More ways to shop:
                <span className='underline text-blue'>
                    Find an Apple Store {' '}
                </span>
                or
                <span className='underline text-blue'>
                    other retailer
                </span>{' '}
                near you.
            </p>

            <p className='font-semibold text-[#86868b] text-xs'>
                Or call 1234-567-890
            </p>
        </div>

        <div className='bg-neutral-700 my-5 h-[1px] w-full' />

        <div className='flex md:flex-row flex-col md:items-center justify-between'>
            <p className='font-semibold text-[#86868b] text-xs'>Copyright @ 2024 Apple Inc. All rights reserved</p>

            <div className='flex'>
                {footerLinks.map((link, i) => (
                    <p key={link} className='font-semibold text-[#86868b] text-xs'>
                        {link}{' '}
                        {i !== footerLinks.length - 1 && (
                            <span className='mx-2'></span>
                        )}
                    </p>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer