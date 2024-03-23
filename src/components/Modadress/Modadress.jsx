
import React from "react"

// модальное окно "доставка"
export const ModAdress = ({ active, setActive }) => {
  return (
    
       // проверка и слушатель обработки нажатия

    <div className={active ? "ModAdress active scale-100 " : "ModAdress scale-0 "} onClick={() => setActive(false)}>
    <div
      className="modal_content ModAdress w-52 h-60 bg-slate-300 ml-10 rounded-md "
      /*что бы окно не закрывалость при нажатии на контентную часть */
      onClick={e => e.stopPropagation()}>
      <form action="" method="post">
        <label className="pl-1" for="POST-name">
          Имя:
        </label>
        <input className="ml-3 text-center "
          id="POST-name"
          type="text"
          placeholder="Ваше имя"
          name="name" />
        <label className="pl-1" for="POST-adress">
          Адрес:
        </label>
        <textarea className="mb-6 w-44 ml-3 text-center" id="POST-name"
          rows="4"
          placeholder="Адрес доставки">
        </textarea>
        <input className="pl-1" type="submit" value="Отправить" />
      </form>
    </div>
  </div>
  )
   
    
 
}


