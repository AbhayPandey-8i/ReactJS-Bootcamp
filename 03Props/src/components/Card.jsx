import React from 'react'

const Card = ({name, identity="God"}) => {
    console.log(name)
  return (
    <div>
      <div className='flex flex-col items-center justify-between mt-5' >
        <img className='size-80' src="https://hips.hearstapps.com/hmg-prod/images/is-loki-alive-1618935098.jpeg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*" alt="" />
        
        <h2 className='text-white font-bold' >NAME: {name}</h2>
        <h2 className='text-white font-bold' >ADDRESS: Asguard</h2>
        <h2 className='text-white font-bold' >IDENTITY: {identity}</h2>
       

      </div>
    </div>
  )
}

export default Card
