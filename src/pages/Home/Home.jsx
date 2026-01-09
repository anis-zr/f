import React from 'react'
import HeroContainer from'./Hero/HeroContainer'
import Gallary from './Gallary/Gallary'
//import PopularClasses from './PopularClasses/PopularClasses'
function Home() {
  return (
    <section>
    <div><HeroContainer/></div>
    <div className='max-w-screen-xl mx-auto'>
      <Gallary/>
   
    </div>
    
    
    </section>

  )
}

export default Home