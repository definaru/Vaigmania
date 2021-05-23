import React from 'react'
import Head from 'next/head'
import { Header } from '../layout/default/Header'

import { GiBleedingHeart } from 'react-icons/gi'

export function MainLayout({children, title = 'Vaigμaηiα ❦', description = 'Официальный сайт художника Рея Ваигми'}) {
    return (
        <>
            <Head>
                <meta name="robots" content="index, follow" />
                <meta name="p:domain_verify" content="a662ed18b42172e06bfe576adeaae3ff"/>
                <meta name="keywords" content="картины, ручные изделия, рисунки, красиво, изысканно, ваигмания, фентези, мистика" />
                <meta name="description" content={description} />
                <meta name="author" content="Ray Vaigmi" />
                <link href="/img/apple_touth_icon.png" rel="apple-touch-icon" />	
                <meta name="openstat-verification" content="d0c332fbb58433114fc944cf7fb42ceacf383387" />
                <title>{title}</title>
                <link rel="canonical" href="http://vaigmania.ru" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Vaigmania" />
                <meta property="og:image" content="http://vaigmania.ru/access/img/apple_touth_icon.png" />
                <meta property="og:title" content="Vaigmania" />
                <meta property="og:url" content="http://vaigmania.ru" />
                <meta property="og:description" content={description} />
            </Head>
            <Header />
            {children}
            <footer className="border-t border-gray-100 py-10">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="flex justify-center py-5 md:py-0">
                            <p className="text-sm flex">
                                <GiBleedingHeart className="w-6 h-6 mr-2 text-red-200" /> 
                                <a
                                    href="#"
                                    className="no-underline hover:underline text-gray-500 hover:text-red-500"
                                    target="_blank"
                                >
                                    Become a sponsor
                                </a>
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="m-0 text-gray-500 text-md">
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
            </footer>
        </>
    )
}
