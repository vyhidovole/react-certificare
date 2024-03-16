import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { LiaTimesSolid } from "react-icons/lia";

export const Modal = ({ isOpen, titleModal, onClose, children }) => {
  /* Обработка закрытия модалки по клику на х */
  const handleClose = () => onClose();

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

  return (
    isOpen &&
    createPortal(
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-black">
        <div
          ref={modalRef}
          className="modal bg-white p-4 rounded shadow-md w-96"
        >
          <header className="flex justify-between mb-4">
            <h2 className="text-xl font-bold">{titleModal}</h2>
            <button
              onClick={handleClose}
              className="text-gray-600 hover:text-gray-800"
            >
              <LiaTimesSolid />
            </button>
          </header>
          <main className="modal-content">{children}</main>
          <footer className="flex justify-end mt-4"></footer>
        </div>
      </div>,
      document.body
    )
  );
};
