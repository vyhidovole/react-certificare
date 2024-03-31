import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaUser } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";



export const Modal = ({ isOpen, titleModal, onClose, children, useForm }) => {
  /* Обработка закрытия модалки по клику на х */
  // const handleClose = () => onClose();

  // Создаем ссылку на Dom-элемент модального окна
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Проверяем, был ли клик вне модального окна
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Закрываем модалку
        onClose();
      }
    };

    // Если модально окно открыто и код выполняется на клиенте
    if (isOpen && typeof window !== "undefined") {
      // Добавляем слушатель события mousedown для закрытия модалки по клику вне
      document.addEventListener("mousedown", handleOutsideClick);
    }

    // Очищаем слушатель события при размонтировании компонента или при закрытии
    return () => {
      // Если  модальное окно открыто и код выполняется на клиенте
      if (isOpen && typeof window !== "undefined") {
        // Добавляем слушатель события mousedown для закрытия модалки по клику вне
        document.removeEventListener("mousedown", handleOutsideClick);
      }
    };
  }, [isOpen, onClose]);
  /* валидация*/
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState('false')
  const [passwordDirty, setPasswordDirty] = useState('false')
  const [emailError, setEmailError] = useState('Емейл не может быть пустым')
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
  const [formValid, setFormValid] = useState('false')


  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)

    }
  }

  )

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Не корректный емейл')

    } else {
      setEmailError('')
    }
  }

  const passWordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Пароль должен быть длиннее 3 и меньше 8')
      if (!e.target.value) {
        setPasswordError('Пароль не может быть пустым')
      }
    } else {
      setPasswordError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty('true')
        break
      case 'password':
        setPasswordDirty('true')
        break
    }
  }




  return (
    isOpen &&
    createPortal(
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-black">
        <div
          ref={modalRef}
          className="modal bg-white p-4 rounded shadow-md w-96"
        >
          <div className=" container-fluid">

            <div className="col-md-4 offset-md-4">
              <div className="form-container bg-slate-300 font font-sans p-10 rounded-lg shadow-lg">
                <div className="form-icon text-pink-800 text-6xl text-center leading-10 w-24 h-24 m-auto rounded-full shadow-2xl px-4 "><i className="fa fa-user "></i><FaUser />
                </div>
                <h3 className="title text-pink-800 text-2xl font-bold uppercase tracking-tighter text-center mx-0 mt-3.5 mb-3.5"
                >Login
                </h3>
                <form
                  className="form-horizontal">
                  <div className="form-group mx-0 mt-0 mb-6">
                    <label className="text-sm font-semibold uppercase block">email
                    </label>
                    {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                    <input value={email}
                      onChange={e => emailHandler(e)}
                      onBlur={e => blurHandler(e)}
                      className="form-control text-center rounded-full"
                      type="email"
                      placeholder="email address" />
                  </div>
                  <div className="form-group">
                    <label className="text-sm font-semibold uppercase block ">
                      password
                    </label>
                    {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
                    <input
                      value={password}
                      onChange={e => passWordHandler(e)}
                      onBlur={e => blurHandler(e)}
                      className="form-control text-center rounded-full"
                      name="password"
                      type="password"
                      placeholder="password" />
                  </div>
                  <button
                    disabled={!formValid}
                    type="submit"
                    className="btn btn-default text-white bg-purple-600   text-sm font-bold uppercase w-full px-3.5 py-3 rounded-full shadow-lg border-none transition-all mt-8  disabled:bg-gray-400 disabled:text-gray-500">
                    Login
                  </button>


                </form>
              </div>
            </div>

          </div>
        </div>
      </div>,
      document.body
    )
  );
};

  