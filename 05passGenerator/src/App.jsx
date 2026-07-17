import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [savePassword, setSavePassword] = useState([])
  

  //useRefHook
  const passwordRef = useRef(null);



  //useCallback Hook
  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "!@#$%^&*()_+"

      //getting random value
      for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)

    },
    [length, numberAllowed, charAllowed, setPassword],
  )

  const copyPasswordToClipboard = useCallback(
    () => {
      passwordRef.current?.select(password) //blue selecting effect
      window.navigator.clipboard.writeText(password) //copy to clipboard
    },
    [password],
  )

  const clearInput = () => {
    setLength("")
  }

  const savePass = () => {
    setSavePassword(password);
  }





  //useEffect
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  



  return (
    <>
      <div className='w-full font-bold text-white text-2xl text-center max-w-xl mx-auto shadow-md rounded-lg px-4 py-6 my-8  bg-gray-700' >
        Password Generator
        <div className='flex mt-3 shadow rounded-lg overflow-hidden mb-4' >
          <input
            type="text"
            value={password}
            className='outline-none w-full text-sm font-medium bg-white text-black py-2 px-3'
            placeholder='Passsword'
            readOnly
            ref={passwordRef}
          />

          <button onClick={copyPasswordToClipboard} className='outline-none hover:bg-blue-500 bg-blue-700 text-white px-3 py-0.5 shrink-0 font-medium' >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2 ' >
          <div className='flex items-center gap-x-1' >
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
              className='cursor-pointer'
            />
            <label>Lenght: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => { setNumberAllowed((prev) => !prev) }} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id="numberInput" onChange={() => { setCharAllowed((prev) => !prev) }} />
            <label htmlFor='charInput'>Characters</label>
          </div>
          <div className='gap-2 flex' >
            <button onClick={clearInput} className='bg-black py-1 px-2 rounded-lg hover:bg-gray-800 text-white' >Clear Input</button>
            <button onClick={savePass} className='bg-black py-1 px-2 rounded-lg hover:bg-gray-800 text-white' >Save</button>
          </div>
        </div>
         <div  >
        <input
          type="text"
          value={savePassword}
          className='outline-none w-full mt-2 rounded-lg text-sm font-medium bg-white text-black py-2 px-3'
          placeholder='Saved Passswords'
          readOnly
        // ref={passwordRef}
        />
      </div>
      </div>
     


    </>
  )
}

export default App
