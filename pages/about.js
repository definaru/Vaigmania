import React from 'react'
import { MainLayout } from '../components/layout/MainLayout'


export default function About() 
{
    return (
        <MainLayout title={'Minust | Vaigμaηiα ❦'}>
            <div className='block pattern h-20'></div>
            <main className="max-w-xl mx-auto pb-20">
                <div className='grid grid-cols-1 gap-6 place-items-center my-20 relative'>
                    <div className="text-center absolute -top-28">
                        <img 
                            src="https://vaigmania.ru/img/76.jpg" 
                            className="w-20 h-20 rounded-full border-4 border-solid border-yellow-50" 
                            alt='Ray Vaigmi' 
                        />
                        <h4 className='text-black mt-2'>Ray Vaigmi</h4>
                    </div>
                    
                    <h2 className='text-red-500 text-3xl font-black mt-10'>Minust</h2>
                    <p className="text-gray-600 text-center">
                        <strong>Ray</strong> - loominguline isiksus ja ühine. Ta sündis Tallinnas, Eestis. 
                        Ta on kiindunud teaduse, kultuuri ja kunsti, inspiratsiooni on hea 
                        või kompenii haroshy kõlab muusika. Ta usub, et inimese väärtust 
                        võime armastada ja luua. Ta eelistab tervislikku eluviisi. 
                        Ta juhib ja maalib kunstnik, üsna varases eas. 
                        Ta naudib reisil, müstika ja okultismi.
                    </p>
                </div>              
            </main>   
            <hr /> 
        </MainLayout>
    )
}