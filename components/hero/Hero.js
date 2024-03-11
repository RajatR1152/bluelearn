import React from 'react'
import HeroImg from './HeroImg'
import HeroText from './HeroText'


export default function Hero() {
    return (
        <div className="container w-full h-fit p-20">
            <div className="container w-full px-28 rounded-[55px] bg-gray-300 h-fit">

                <div className="container w-full pt-10 text-center">
                    <h1 className="text-5xl font-semibold text-[#1a1e4a]">Experience learning at <span className="text-orange-500">our centres near you!</span></h1>
                </div>

                <div className="container w-full flex">

                    <HeroImg />

                    <HeroText />

                </div>

            </div>
        </div>
    )
}
