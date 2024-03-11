import React from 'react'
import { FaCirclePlay, FaRegClock, FaStar } from 'react-icons/fa6'

export default function MentorCard({ years }) {
    return (
        <div className="container mx-auto w-[20%] border rounded-2xl border-orange-500 h-[400px]">
            <div className="contianer w-[102%]  -ms-1 flex items-center justify-center h-[60%] bg-gray-300 rounded-3xl">
                <FaCirclePlay className='fill-orange-500' size={65} />
            </div>
            <div className="contaiener p-5 w-full flex flex-col gap-5">
                <h1 className="text-2xl font-bold text-gray-700 capitalize">full name</h1>

                <div>
                    <span className="flex gap-5 text-sm text-gray-500"><FaRegClock size={20} className='fill-gray-600' /> {years} years</span>
                    <span className='flex gap-1 my-5'>
                        <FaStar size={20} className="fill-orange-500" />
                        <FaStar size={20} className="fill-orange-500" />
                        <FaStar size={20} className="fill-orange-500" />
                        <FaStar size={20} className="fill-orange-500" />
                        <FaStar size={20} className="fill-gray-300" />
                        <p className='text-gray-500 text-sm'>(200)</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
