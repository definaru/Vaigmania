import React from 'react'
import { ErrorLayout } from '../components/layout/ErrorLayout'

export default function Custom500() {
    return (
        <ErrorLayout>
            <h1>500 - Error in Server</h1>
            <p>i`m sorry</p>
        </ErrorLayout>
    )
}
