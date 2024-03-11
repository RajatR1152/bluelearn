import CourseCards from '@/components/CourseCards'
import Header from '@/components/Header'
import Mentors from '@/components/Mentors'
import Hero from '@/components/hero/Hero'
import React from 'react'

export default function page() {
  return (
    <>
      <Header/>
      <Hero/>
      <CourseCards/>
      <Mentors/>
    </>
  )
}
