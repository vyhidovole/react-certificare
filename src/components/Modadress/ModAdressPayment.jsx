// модальное окно "оплата"
import React from "react"
// проверка и слушатель обработки нажатия
export const ModAdressPayment = ({ active, setActive }) => {
  return (
    <div className={active ? "ModAdressPayment active scale-100" : "ModAdressPayment scale-0 "} onClick={() => setActive(false)}>
      <div
        className="modal_content ModAdressPayment w-60 h-52 bg-slate-300 ml-10 rounded-md "
        /*что бы окно не закрывалость при нажатии на контентную часть */
        onClick={e => e.stopPropagation()}>
        <form className="pl-7" method='POST'
         action='https://demo.paykeeper.ru/create/' >
  Введите сумму оплаты: 
    <input type='text'
     name='sum' 
     value='1000'/> <br />
  Введите номер заказа: 
    <input type='text'
     name='orderid' 
     value='1234'/> <br />
  Введите название услуги: 
    <input type='text' 
    name='service_name' 
    value='тестовая'/> <br />
  <input type='submit'
   value='Перейти к оплате' />
</form>
      </div>
    </div>
  )
}


