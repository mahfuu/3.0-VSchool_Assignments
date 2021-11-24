import React from "react"

import Card from "./Card"
import vacationSpots from "./Spot"

function App() {
  const vacationComponents = vacationSpots.map(location => <Card destination={location}/>)
  return (
    <div>
      {vacationComponents}
    </div>
  )
}

export default App