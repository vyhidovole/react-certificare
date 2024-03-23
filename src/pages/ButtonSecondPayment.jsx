
import React, { useState } from "react"
import { ModAdressPayment } from "../components/ModAdress/ModAdressPayment"

const ButtonSecond = () => {
  const [ModAdressPaymentActive, setModAdressPaymentActive] = useState(false)
  return (
    <>
      <main>
        <button onClick={() => setModAdressPaymentActive(true)}>Оплата</button>
      </main>
      <ModAdressPayment active={ModAdressPaymentActive} setActive={setModAdressPaymentActive} />
    </>
  )
}

export default ButtonSecond