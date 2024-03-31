const validators = {
  /**
   * Валидатор для текстовых полей.
   * @param {string} value - Значение поля.
   * @param {string} fieldName - Название поля.
   * @returns {string | null} - Сообщение об ошибке или null, если валидация прошла успешно.
   */
  text: (value, fieldName) => {
    if (!value) {
      return `${fieldName} is required`;
    }
    return null;
  },
  /**
   * Валидатор для полей электронной почты.
   * @param {string} value - Значение поля.
   * @param {string} fieldName - Название поля.
   * @returns {string | null} - Сообщение об ошибке или null, если валидация прошла успешно.
   */
  email: (value, fieldName) => {
    if (!value) {
      return `${fieldName} is required`;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return `Invalid ${fieldName}`;
    }
    return null;
  },
  /**
   * Валидатор для полей телефона.
   * @param {string} value - Значение поля.
   * @param {string} fieldName - Название поля.
   * @returns {string | null} - Сообщение об ошибке или null, если валидация прошла успешно.
   */
  phone: (value, fieldName) => {
    if (!value) {
      return `${fieldName} is required`;
    } else if (!/^\+?[0-9-]+$/.test(value)) {
      return `Invalid ${fieldName}`;
    }
    return null;
  },
  /**
   * Валидатор для полей пароля.
   * @param {string} value - Значение поля.
   * @param {string} fieldName - Название поля.
   * @returns {string | null} - Сообщение об ошибке или null, если валидация прошла успешно.
   */
  password: (value, fieldName) => {
    if (!value) {
      return `${fieldName} is required`;
    } else if (value.length < 8) {
      return `${fieldName} must be at least 8 characters long`;
    }
    return null;
  },
  /**
   * Валидатор для полей, требующих числовое значение.
   * @param {string} value - Значение поля.
   * @param {string} fieldName - Название поля.
   * @returns {string | null} - Сообщение об ошибке или null, если валидация прошла успешно.
   */
  number: (value, fieldName) => {
    if (!value) {
      return `${fieldName} is required`;
    } else if (isNaN(value)) {
      return `${fieldName} must be a number`;
    }
    return null;
  },
};

/**
 * Функция для валидации формы на основе предоставленных валидаторов.
 *
 * @param {Object} formData - Данные формы, представленные в виде объекта.
 * @returns {Object} - Объект с сообщениями об ошибках для каждого поля формы.
 */
export function validateForm(formData) {
  // Объект для хранения сообщений об ошибках для каждого поля
  const validationErrors = {};

  // Проход по каждому полю формы
  for (const fieldName in formData) {
    // Проверка, есть ли валидатор для данного поля
    if (formData.hasOwnProperty(fieldName) && validators[fieldName]) {
      // Получение валидатора для текущего поля
      const validator = validators[fieldName];
      // Вызов валидатора для проверки значения поля
      const errorMessage = validator(formData[fieldName], fieldName);

      // Если есть сообщение об ошибке, добавить его в объект validationErrors
      if (errorMessage) {
        validationErrors[fieldName] = errorMessage;
      }
    }
  }

  // Возвращение объекта с сообщениями об ошибках для каждого поля формы
  return validationErrors;
}
