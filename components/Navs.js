'use client'
import Link from 'next/link'
import React from 'react'
import { CiMenuBurger } from 'react-icons/ci'

export default function Navs() {
    return (
        <div className="container w-fit mx-auto flex gap-5 text-lg">

            <CiMenuBurger size={30} className='md:hidden' />

            <div className="md:flex hidden">
                <Link href={'/'} className=' font-semibold uppercase'>ceut</Link>

                <select name="result" id="result" className="font-semibold bg-transparent capitalize">
                    <option value="Result">Result</option>
                    <option value="value2">value2</option>
                    <option value="value3">value3</option>
                </select>

                <select name="preparation" id="preparation" className="font-semibold bg-transparent capitalize">
                    <option value="preparation">preparation</option>
                    <option value="value2">value2</option>
                    <option value="value3">value3</option>
                </select>

                <select name="articles" id="articles" className="font-semibold bg-transparent capitalize">
                    <option value="articles">articles</option>
                    <option value="value2">value2</option>
                    <option value="value3">value3</option>
                </select>

                <select name="univercities" id="univercities" className="font-semibold bg-transparent capitalize">
                    <option value="univercities">univercities</option>
                    <option value="value2">value2</option>
                    <option value="value3">value3</option>
                </select>
            </div>

        </div>
    )
}
