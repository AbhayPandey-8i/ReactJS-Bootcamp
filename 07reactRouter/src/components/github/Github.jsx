import React, { useEffect, useState } from 'react'

const Github = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/AbhayPandey-8i")
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            setData(data)
        })

     
    }, [])
    

  return (
    <div className='text-center m-4 bg-gray-600 text-white' > 
      Github: followers:{data.followers} 
    </div>
  )
}

export default Github
