import React from 'react'
import Head from 'next/head'

export function ErrorLayout({children, title = '404'}) 
{
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className="max-w-xl mx-auto py-60">
                {children}
            </main>
        </>
    )
}
