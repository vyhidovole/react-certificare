
import React from "react"
// модальное окно "сборка"
export const ModAdressAssembly = ({ active, setActive }) => {

  return (
    /*проверка и слушатель обработки нажатия */
    <div className={active ? "ModAdressAssembly active scale-100" : "ModAdressAssembly scale-0 "} onClick={() => setActive(false)}>
      <div
        className="modal_content ModAdressAssembly w-32 h-15 bg-slate-300 p-4 rounded-md "
       /*что бы окно не закрывалость при нажатии на контентную часть */
       onClick={e => e.stopPropagation()}>
        <form   action="" method="post">
          <label className="" for="POST-name">
            
          </label>
          <input className=" text-center w-full"
            id="POST-name"
            type="text"
            placeholder="Да/Нет"
            name="name" />
           <input className="pl-1 pt-1" type="submit" value="Отправить" />
        </form>
      </div>
    </div>
  )
}


