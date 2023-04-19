import React from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import { FaPatreon, FaPaypal, FaCoffee } from 'react-icons/fa'


export default function About() 
{
    const Title = 'Become a sponsor'
    return (
        <MainLayout title={`${Title} | Vaigμaηiα ❦`}>
            <main className="max-w-xl mx-auto pb-20">
                <div className='grid grid-cols-1 gap-6 place-items-center my-20 pt-20 relative'>
                    <h2 className="text-red-500 text-3xl font-black mt-10">{Title}</h2>
                    <p className="text-center text-gray-600">
                    You can leave sponsorship for the project. 
                    This will help in promotion and development, and you will have access to exclusive materials.
                    </p>
                    <div className="text-gray-600 text-center">
                        <ul className="grid gap-5">
                            <li>
                                <a href="#" target="_blank" className="flex items-center gap-4 text-2xl text-gray-800 hover:text-red-500">
                                    <FaPatreon className="text-red-600" /> 
                                    <span>Go to Patreon</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="flex items-center gap-4 text-2xl text-gray-800 hover:text-red-500">
                                    <FaPaypal className="text-blue-800" /> 
                                    <span>Go to Paypal</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.buymeacoffee.com/" target="_blank" className="flex items-center gap-4 text-2xl text-gray-800 hover:text-red-500">
                                    <FaCoffee className="text-yellow-500" /> 
                                    <span>Buy Me a Coffee</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>              
            </main>   
            <hr /> 
        </MainLayout>
    )
}