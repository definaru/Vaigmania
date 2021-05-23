import React from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import { AiOutlineBehance, AiOutlineDribbble, AiOutlineInstagram } from 'react-icons/ai'

export default function Home() 
{
    return (
        <MainLayout title={'Vaigμaηiα ❦'}>

            <main className="max-w-6xl mx-auto py-10">
                <div className="p-0 md:px-40">
                    <img src="/access/img/page/home/1.png" className="max-w-none w-full" alt="1" />
                </div>              
            </main>

            <main className="max-w-6xl mx-auto py-10">
                <div className="grid grid-cols-3 md:gap-4 place-items-center h-36">
                  <div>
                    <a href="https://behance.net/vaigmi" className="flex space-x-2" target="_blank">
                        <AiOutlineBehance className="w-10 h-10 flex-none text-red-500" />
                        <img 
                          src="/access/img/page/home/behance-4.svg" 
                          className="hidden md:inline-block transition duration-700 ease-in-out transition-opacity hover:opacity-50 w-32 opacity-75" 
                          alt="Behance" 
                        />
                    </a>
                  </div>
                  <div>
                    <a href="https://dribbble.com/vaigmi" className="flex space-x-2" target="_blank">
                        <AiOutlineDribbble className="w-10 h-10 flex-none text-red-500" />
                        <img 
                          src="/access/img/page/home/dribbble-4.svg" 
                          className="hidden md:inline-block transition duration-700 ease-in-out transition-opacity hover:opacity-50 w-32 opacity-75" 
                          alt="Dribbble" 
                        />
                    </a>
                  </div>
                  <div>
                    <a href="https://instagram.com/vaigmi/" className="flex space-x-2" target="_blank">
                        <AiOutlineInstagram 
                          className="w-10 h-10 flex-none text-red-500"
                        />
                        <img 
                          src="/access/img/page/home/instagram-2.svg" 
                          className="hidden md:inline-block transition duration-700 ease-in-out transition-opacity hover:opacity-50 w-32" 
                          alt="Instagram" 
                        />
                    </a>
                  </div>
                </div>
            </main>      
        </MainLayout>
    )
}