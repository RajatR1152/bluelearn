'use client'
import React from 'react'
import Navs from './Navs'

export default function Header() {
    return (
        <div className="container w-full bg-gray-400 flex items-center justify-center py-3 px-5">

            <Navs />

            <div className="container flex gap-6 w-fit ms-auto">
                <button className="px-10 py-3 rounded-full text-white bg-transparent text-md border-2 border-white shadow-lg shadow-gray-600 uppercase">sign in</button>
                <button className="px-10 py-3 rounded-full text-white bg-orange-500 text-lg border-2 border-orange-500 shadow-lg shadow-gray-600 uppercase">sign in</button>
            </div>

        </div>
    )
}
