import React from 'react'
import img1 from '../../../assets/a.jpg'
import Video from '../../../assets/m.mp4'
const Gallary = () => {
  return (

    <div className='md:w-[80%] mx-auto my-28'>
      <div className='mb-16'>
     <h1 className='text-5xl font-bold text-center'> OUR SERVICE </h1>

    </div>
    <div className=' md:grid grid-cols-2 items-center justify-center border gap-4'>
        <div className='mb-4 md:mb-0 '>
      <video src={Video}  autoPlay muted loop className='md:h-[720px] w-full mx-auto rounded-sm' />
     
        </div>  
        <div className='gap-4 grid grid-cols-2 items-start'>
     
        <div><img src= {img1} alt="" className='md:h-[350px] rounded-sm' /></div>
         <div><video src="assets/m.mp4" controls autoPlay muted className='md:h-[350px] rounded-sm' /></div>
         <div><img src={img1}  alt="" className='md:h-[350px] rounded-sm' /></div>
         <div><img src={img1}  alt="" className='md:h-[350px] rounded-sm' /></div>

        </div>
         </div>   
         
          </div>
        
       
     
  )
}

export default Gallary
