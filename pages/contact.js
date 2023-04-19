import React from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import { FaTwitter, FaFacebookF, FaMailBulk, FaPaperPlane } from 'react-icons/fa'

export default function Contact()
{
    const Title = 'Kontaktid'

    return (
        <MainLayout title={`${Title} | Vaigμaηiα ❦`}>
            <main className="max-w-4xl mx-auto pb-20">
                <div className='grid grid-cols-1 gap-6 place-items-center my-20 relative'>
                    <h2 className="text-red-500 text-3xl font-black mt-20 mb-14">{Title}</h2>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="col-span-2">
                            <h2 className="text-xl font-bold mb-3">Minust</h2>
                            <p>
                                Ray - loominguline isiksus ja ühine. Ta sündis Tallinnas, Eestis. 
                                Ta on kiindunud teaduse, kultuuri ja kunsti, inspiratsiooni on hea või 
                                kompenii haroshy kõlab muusika. Ta usub, et inimese väärtust võime 
                                armastada ja luua. Ta eelistab tervislikku eluviisi. Ta juhib ja 
                                maalib kunstnik, üsna varases eas. Ta naudib reisil, müstika ja okultismi.                                
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-3">Sidemed</h2> 
                            <ul class="list-unstyled">
                                <li className="flex items-center gap-2">
                                    <FaTwitter className="text-gray-700" /> 
                                    <a href="https://twitter.com/rayvaigmi" className="no-underline hover:underline text-gray-800 hover:text-red-500" target="_blank">
                                        Liituge Twitter
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaFacebookF className="text-gray-700" /> 
                                    <a href="https://www.facebook.com/Vaigmi/" className="no-underline hover:underline text-gray-800 hover:text-red-500" target="_blank">
                                        Hinda Facebook
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaMailBulk className="text-gray-700" /> 
                                    <a href="mailto:rayvaigmi@gmail.com" className="no-underline hover:underline text-gray-800 hover:text-red-500">
                                        Saata E-mail
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaPaperPlane className="text-gray-700" /> 
                                    <a href="tg://resolve?domain=iQ_Solution" className="no-underline hover:underline text-gray-800 hover:text-red-500" target="_blank">
                                        @Telegram
                                    </a>
                                </li>    
                            </ul>
                        </div>
                    </div>
                </div>
            </main>   
            <hr /> 
        </MainLayout>
    )
}