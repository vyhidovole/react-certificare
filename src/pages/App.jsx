
import React,{ useState } from "react"
import{ Modadress} from "../components/Modadress/Modadress"

const App=()=>{
    const[modadressActive, setModadressActive] = useState(true)
    return(
      <>
     <main>
        <button onClick={()=>setModadressActive(true)}>Доставка</button>
      </main>
      <Modadress active={modadressActive} setActive={setModadressActive}/>

  
      
      </>
    )
  }
  
  export default App