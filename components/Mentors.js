import React from 'react'
import MentorCard from './MentorCard'
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci'

export default function Mentors() {
    return (
        <div className="container w-full p-8 h-[600px]">
            <div className="container w-full h-3/6 p-5 rounded-[50px] bg-orange-500">
                <h1 className="text-2xl text-white font-semibold text-center">Meet our top mentors</h1>
            </div>

            <div className="container w-full h-3/6 flex relative -top-[30%]">
                <CiCircleChevLeft className='mx-3 mt-20' size={30} />
                <MentorCard years={10} />
                <MentorCard years={7} />
                <MentorCard years={5} />
                <CiCircleChevRight className='mx-3 mt-20' size={30} />
            </div>
        </div>
    )
}
