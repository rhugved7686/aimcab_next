'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
  const state = useSelector(state => state.trip);

  console.log(state);

  return (
    <div>About</div>
  )
}

export default About