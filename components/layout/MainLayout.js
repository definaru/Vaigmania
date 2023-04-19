import React, { useEffect } from 'react'
import { FooterIcons } from '../ui/footer/FooterIcons'
import { Header } from './default/Header'
import { Footer } from './default/Footer'
import { Seo } from './default/Seo'
import SmoothScroll from 'smooth-scroll/dist/smooth-scroll'


export function MainLayout({
    children, 
    title = 'Vaigμaηiα ❦', 
    description = 'Официальный сайт художника Рея Ваигми'
}) {

    useEffect(() => {
        const scroll = new SmoothScroll('a[href*="#"]', {
            speed: 1000,
            speedAsDuration: true,
            updateURL: false
        })
    }, [])
    
    return (
        <>
            <Seo title={title} description={description} />
            <Header />
            <div className="mt-28">
                {children}
            </div>
            <FooterIcons /> 
            <Footer />
        </>
    )
}
