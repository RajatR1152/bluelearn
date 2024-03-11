'use client'
import Link from 'next/link'
import React from 'react'
import Card from './Card'
import { FaAngleRight } from 'react-icons/fa'

export default function CourseCards() {
    return (
        <div className="container flex flex-col gap-10 w-full h-fit p-5">

            <div>
                <h1 className="text-3xl font-semibold text-center text-[#1a1e4a]">
                    Not sure which course is for you?
                </h1>
                <h1 className="text-3xl font-semibold text-center text-[#1a1e4a]">
                    Checkout these <Link href={'/'} className='text-orange-500 underline'>FREE lectures</Link> to help you choose!
                </h1>
            </div>

            <div className="container w-full flex">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <button className=" w-fit px-7 mx-auto py-2 rounded-full text-white bg-orange-500 text-md border-2 border-orange-500 shadow-lg flex gap-3 items-center shadow-gray-600 uppercase">explore more <FaAngleRight size={25} /></button>

        </div>
    )
}
