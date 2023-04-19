import React from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import { getSketch } from '../components/data/getSketch'
import { Card } from '../components/ui/card/Card'


export default function Kavandid() 
{
    const Title = 'Kavandid'
    const sketch = getSketch()
    return (
        <MainLayout title={`${Title} | Vaigμaηiα ❦`}>
            
            <div className='bg-yellow-50'>
                <div className='block bg-yellow-50 h-20'></div>
                <main className="max-w-xl mx-auto pb-20">
                    <div className='grid grid-cols-1 gap-6 place-items-center mb-10 relative'>
                        <div className="text-center absolute -top-10">
                            <img 
                                src="https://vaigmania.ru/img/roze.png" 
                                className="w-20 h-20 rounded-full border-4 border-white shadow" 
                                alt='Ray Vaigmi' 
                            />
                        </div>
                        <div className="bg-white shadow-md rounded py-4 px-14 text-center">
                            <h2 className='text-red-500 text-3xl font-black mt-10'>{Title}</h2>
                            <p className="text-gray-600">
                                Siin on minu jooniseid eelnõud, ja võib-olla midagi, mida ma ei tõmmanud.
                            </p>                            
                        </div>
                    </div>   
                    <div className="grid gap-6">
                        {sketch.map((item, i) => (
                            <Card key={i} data={item} />
                        ))}
                    </div>        
                </main>                
            </div>
        </MainLayout>
    )
}