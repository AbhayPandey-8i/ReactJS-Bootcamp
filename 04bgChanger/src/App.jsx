import { useState } from "react"

function App() {
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState("black")

  return (
    <div
      className="h-screen w-full"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center">
        <div className="flex gap-3 bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="bg-red-600 w-14 rounded-xl"
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="bg-green-500 w-14 rounded-xl"
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="bg-blue-500 w-14 rounded-xl"
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
