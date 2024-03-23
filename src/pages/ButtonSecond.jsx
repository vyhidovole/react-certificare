
import React, { useState } from "react"
import { ModAdress } from "../components/ModAdress/ModAdress"

const ButtonSecond = () => {
  /* состояние окна */
  const [ModAdressActive, setModAdressActive] = useState(false)
  return (
    <>
      <main>
        <button onClick={() => setModAdressActive(true)}>Доставка</button>
      </main>
     {/* передаем переменную функции изменения состояния в модальное окно */}
      <ModAdress active={ModAdressActive} setActive={setModAdressActive} />
    </>
  )
}

export default ButtonSecond