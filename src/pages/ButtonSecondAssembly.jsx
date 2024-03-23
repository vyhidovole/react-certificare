
import React, { useState } from "react"
import { ModAdress } from "../components/ModAdress/ModAdress"
import { ModAdressAssembly } from "../components/ModAdress/ModAdressAssembly"

const ButtonSecondAssembly = () => {
  const [ModAdressAssemblyActive, setModAdressAssemblyActive] = useState(false)
  return (
    <>
      <main>
        <button onClick={() => setModAdressAssemblyActive(true)}>Сборка</button>
      </main>
      <ModAdressAssembly active={ModAdressAssemblyActive} setActive={setModAdressAssemblyActive} />
    </>
  )
}

export default ButtonSecondAssembly