import React from 'react'
import Link from 'next/link'
import { ErrorLayout } from '../components/layout/ErrorLayout'

export default function Custom404() 
{
    return (
        <ErrorLayout>
            <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            <p className="text-xl py-4">i`m sorry</p>
            <div>
                <Link href={'/'} className="bg-red-600 hover:bg-red-700 rounded-full py-2 px-12 text-white">Go Home</Link> 
            </div>
        </ErrorLayout>
    )
    
}