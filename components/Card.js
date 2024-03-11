import React from 'react'
import { FaCirclePlay } from 'react-icons/fa6'

export default function Card() {
    return (
        <div className="containe h-[300px] md:w-3/12 p-3">
            <div className="contianer w-full flex items-center justify-center h-full bg-gray-300 rounded-3xl">
                <FaCirclePlay className='fill-orange-500' size={65} />
            </div>
        </div>
    )
}
