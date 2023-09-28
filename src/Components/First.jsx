import React from 'react'
import oldman1 from "../assets/oldman1.jpg"
import oldman2 from "../assets/oldman2.jpg"
import Logo from "../assets/Logo.jpg"

const First = () => {
  return (
    <>
    <div id="main" className='w-5/6 h-1/3 md:w-5/6 md:h-5/6 max-h-[760px] max-w-[1200px] relative m-auto flex bg-[#cdadb6] overflow-hidden'>
    <div id="part1" className='h-full w-1/3 md:w-1/3'></div>
    <div id="part2"className='h-full w-full md:w-1/2 bg-model1 bg-cover bg-center '> <div className='w-full h-full bg-[#cdadb68a]'>
        </div></div>
    <div id="part3"className='h-full w-1/6 md:w-1/6 '></div>
<div id='textdiv' className='uppercase text-xl text-orange-50 md:text-7xl tracking-[0.2em] font-black absolute top-2/3 left-4 -translate-y-1/2'>
    <h1>Nature</h1>
    <h1>Morte</h1>
    <h1>For</h1>
    <h1>Harper's</h1>
</div>
<div id="smallimg" className='absolute bg-model2 bg-cover bg-center w-1/6 h-1/3 right-5 top-1/2 -translate-y-1/2' ><div className='w-full h-full bg-[#cdadb686]'>
        </div></div>

        <div className="verticaltext  w-full z-10 absolute uppercase origin-bottom-left rotate-90 -right-full -top-12 lg:-top-15 tracking-[1em] -translate-x-10 whitespace-nowrap"> <h1 className='text-lg sm:text-3xl md:text-5xl lg:text-7xl  font-extrabold text-transparent  '>
        Selection Winter </h1></div>

        <div className="logimg absolute w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] top-2 left-6 md:top-6 "><img src={Logo} className='w-full h-full' alt="" /></div>
        <div className="finaltext absolute text-[10px] sm:text-[15px] md:text-[20px] text-orange-50 font-semibold tracking-wider top-2 md:top-8 left-20 translate-x-1/2 translate-y-1/2"><p>Louis Vuitton</p></div>
    </div>
    
    
    </>
    
  )
}

export default First