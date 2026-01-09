/*import React, { useEffect, useState } from 'react'
import useAxiosFetch from '../../../hooks/useAxiosFetch'
import Card from './Card'

const PopularClasses = () => {
    const axiosFetch = useAxiosFetch()
    const[classes, setClasses]= useState([])
    useEffect(()=>{
        const fetchClasses = async ()=>{
            const response = await axiosFetch.get('/Classes')
           // console.log(response.data)
            setClasses(response.data)
        }
        fetchClasses();
    },[])
  console.log(classes)
  return (
    <div className='md:w-[80%] mx-auto my-36'>
      <div>
        <h1 className='text-5xl font-bold text-center'> our <span className='text-secondary'> SERVICE</span></h1>
        <div className=' w-[40%] text-center mx-auto my-4'>
            <p className='text-gray-500'> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        </div>
         <div className='grid md:grid-cols-2 lg:grid-cols-3'>
        {
            classes.map((item, index) => <Card key={index} item={item} />)
        }
</div>
</div>
    
   
    

  )
}

export default PopularClasses
*/