import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { GiBleedingHeart } from 'react-icons/gi'
import { FaArrowUp } from 'react-icons/fa'


export function Footer()
{

    const [arrow, setArrow] = useState(false)

    useEffect(() => {
        var scroll_position = 0;
        window.addEventListener('scroll', function(e) {
            scroll_position = window.scrollY
            if (scroll_position >= 500) {
                setArrow(true)
            } else {
                setArrow(false)
            }
        })
    }, [])

    return (
        <footer className="border-t border-gray-100 py-10 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="flex justify-center py-5 md:py-0">
                        <p className="text-sm flex items-center">
                            <GiBleedingHeart className="w-6 h-6 mr-2 text-red-300" /> 
                            <Link
                                href="/sponsor"
                                className="no-underline hover:underline text-gray-500 hover:text-red-500 mt-1"
                            >
                                Become a sponsor
                            </Link>
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="m-0 text-gray-500 text-sm font-extralight text">
                            All right recerved &#160;  
                            &copy; 1997 - {(new Date()).getFullYear()} Vaigmania
                        </p>                            
                    </div>
                    <div>
                        <p className="text-sm text-center md:right py-3 md:py-0">
                            Made in&#160;
                            <a 
                                href="https://pagereact.netlify.app" 
                                className="no-underline hover:underline text-gray-500 hover:text-indigo-500"
                                target="_blank"
                            >
                                ReactPage
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            {arrow ? 
            <a data-scroll href="#top" className="fixed bottom-5 right-4 px-4 py-4 rounded bg-white">
                <FaArrowUp />
            </a> : ''}
        </footer>
    )
}