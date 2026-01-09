import React from 'react'
import bgImg from '../../../assets/m.jpg'
import { Link } from 'react-router-dom'

const Hero2 = () => {
return (
    <div className='min-h-screen bg-cover  'style={{backgroundImage: ` url(${bgImg})`}}>
      <div className='min-h-screen flex justify-start pl-11 items-center text-white bg-black bg-opacity-60'>
<div>
  <div className='space-y-4'>
    <p className='md:text-4xl text-2xl '> we provide  </p>
    <h1 className='md:text-7xl text-4xl font-bold '>aniisss</h1>
    <div className='md:w-1/2'>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio natus reiciendis, inventore perferendis explicabo, voluptates, incidunt accusantium enim corporis quam atque velit obcaecati!.</p></div>
  </div>
  <div className='flex flex-wrap items-center gap-5'>
    <button className='px-7 py-3 rounded-lg bg-secondary font-bold uppercase'><Link to= '/login' >GET STARTED</Link></button>
    <button className='px-7 py-3 rounded-lg border hover:bg-secondary font-bold uppercase'>View </button>
  </div>

</div>

      </div>
    </div>
  )
}

export default Hero2
