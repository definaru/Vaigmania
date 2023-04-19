import React from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import { Slider } from '../components/ui/slider/Slider'


export default function Home() 
{
    return (
        <MainLayout title={'Vaigμaηiα ❦'}>
            <main className="max-w-6xl mx-auto">
                <Slider />
            </main>
        </MainLayout>
    )
}