import { useState } from "react"

export default function Meals() {
  const [loadedMeals,setLoadedMeals] = useState([])

   async function fetchMeals(){
    const response = await fetch("http//localhost:3000/meals")
    const meals = response.json()
   }
  
    
  return (
    <div>
      <ul id="meals">

      </ul>
    </div>
  )
}
