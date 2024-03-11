import React from 'react'
import { FaAngleRight, FaRegCheckCircle } from 'react-icons/fa'

export default function HeroText() {
    return (
        <div className="container flex flex-col gap-7 font-semibold w-full md:w-7/12 h-full">
            <div className="container w-full">
                <p className="text-md mt-14 my-10 capitalize">
                    Our ever-growing number of centers,
                    spread across India, are a melting pot of absolute.
                    They are hubs for academic excellence where dreams are nurtured,
                    skills are honed, and futures are built.
                </p>

                <ul className='flex flex-col gap-2'>
                    <li className='flex gap-3 items-center'><FaRegCheckCircle className='fill-orange-500' />Personalized learning from top educators in your very own city</li>
                    <li className='flex gap-3 items-center'><FaRegCheckCircle className='fill-orange-500' />State-of-the-Art Facilities with latest technologies</li>
                    <li className='flex gap-3 items-center'><FaRegCheckCircle className='fill-orange-500' />Unparalleled in-person experience</li>
                </ul>
            </div>

            <h1 className="text-3xl font-semibold text-orange-500 capitalize">Checkout the centre closest to you</h1>

            <form className='md:w-6/12 flex flex-col gap-5 py-5' >

                <select name="city" className='w-full p-3 px-5 focus:outline-none rounded-lg border-2 border-orange-500 bg-transparent' id="city">
                    <option value="city1">city1</option>
                    <option value="city2">city2</option>
                    <option value="city3">city3</option>
                </select>

                <select name="city" className='w-full p-3 px-5 focus:outline-none rounded-lg border-2 border-orange-500 bg-transparent' id="city">
                    <option value="city1">city1</option>
                    <option value="city2">city2</option>
                    <option value="city3">city3</option>
                </select>

                <button className=" w-fit px-7 ms-9 py-2 rounded-full text-white bg-orange-500 text-md border-2 border-orange-500 shadow-lg flex gap-3 items-center shadow-gray-600 uppercase">Find a center <FaAngleRight size={25} /></button>

            </form>

        </div>
    )
}
