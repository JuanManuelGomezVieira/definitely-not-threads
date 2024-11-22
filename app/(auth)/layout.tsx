import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

import '../globals.css'

export const metadata = {
    title: 'Definitely Not Threads',
    description: 'This is not a Meta Threads clone with Next JS 15'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ 
    children
}: {
    readonly children: React.ReactNode}) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={`${inter.className} bf-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}