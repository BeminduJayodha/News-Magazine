import { useState } from "react"
import Navbar from "./Componenets/Navbar"
import NewsBoard from "./Componenets/NewsBoard"

const App = () => {
  const[category,setCategory]=useState("general");
  return (
    <div>
    <Navbar setCategory={setCategory}/>
    <NewsBoard category={category}/>

    </div>
  )
}
export default App
