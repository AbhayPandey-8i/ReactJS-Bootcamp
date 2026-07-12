import { useState } from "react";


function App() {

  //  let counter = 0;
  const [counter, setCounter] = useState(0)


  const addValue = () => {
    setCounter(counter + 1)
    console.log(counter)
  }

  const counterRemoveValue = () => {
    if (counter == 0) {
      counter = 0;
    } else {
      setCounter(counter - 1);
    }
  }


  return (
    <>
      <h1>Counter Is Here</h1>
      <h3>Counter Value is: {counter}</h3>

      <button onClick={addValue} >Add Value</button>
      <br />
      <button onClick={counterRemoveValue} >Remove Value</button>

    </>
  )
}

export default App
