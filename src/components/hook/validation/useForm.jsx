import React, { useState } from "react";
import { validateForm } from "../../utils/validators";

/**
 * Хук для управления состоянием формы, валидацией и обработки отправки данных.
 *
 * @param {Object} initialState - Начальное состояние формы.
 * @param {function} setNewState - Функция для обновления состояния формы (Опциональный).
 * @returns {Object} - Объект с состоянием формы, ошибками и функциями.
 */
function useForm(initialState, setNewState) {
  // Состояние формы (значения полей)
  const [formData, setFormData] = useState(initialState);

  // Состояние для отслеживания ошибок валидации
  const [errors, setErrors] = useState({});

  /**
   * Обработчик при смене данных на элементе формы
   *
   * @param {Event} e - Объект события изменения данных на элементе формы
   */
  const handleChange = (e) => {
    // Извлекаем имя поля и его новое значение из события
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value, // Обновляем значение поля в state формы
    });

    // Валидируем только текущее поле
    const validationErrors = {
      ...errors,
      [name]: validateForm({
        [name]: value,
        required: initialState[name]?.required,
      })[name],
    };

    // Обновляем состояние ошибок
    setErrors(validationErrors);
  };

  /**
   * Обработчик при отправке данных
   *
   * @param {Event} e - Объект события отправки формы
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка наличия пустых полей
    const isEmptyField = Object.keys(initialState).some(
      (name) => initialState[name]?.required
    );

    switch (true) {
      case isEmptyField:
        console.log("Поля обязательны к заполнению");
        break;
      case setNewState !== undefined:
        // Передать данные в новый стейт, если setNewState передан
        console.log("setNewState", setNewState);
        setNewState(formData);
        break;
      default:
        // Обновить состояние формы, если setNewState не передан
        console.log("setFormData", formData);
        setFormData(formData);
        break;
    }

    // Очистить форму
    resetForm();
  };

  /**
   * Функция для сброса состояния формы.
   */
  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
