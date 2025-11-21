import React from 'react';
import { useField } from 'formik';
import Select, {
  components,
  DropdownIndicatorProps, // ✅ Імпорт для типізації
  GroupBase,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';
import { Category } from '@/types/recipe';
import css from '../AddRecipeForm.module.css';
import { FormikSelectProps, SelectOption } from '@/types/formik';

// ----------------------------------------------------
// 🎨 Кастомний Dropdown Indicator (Стрілка)
// ----------------------------------------------------

// ✅ Використовуємо DropdownIndicatorProps для коректної типізації
const DropdownIndicator = (
  props: DropdownIndicatorProps<SelectOption, false>,
) => {
  // Ми беремо оригінальний компонент для збереження функціональності
  return components.DropdownIndicator ? (
    <components.DropdownIndicator {...props}>
            {/* ВАША КАСТОМНА SVG ІКОНКА */}   
      <svg
        className={css.arrowIcon}
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
      >
        <use href="/sprite.svg#icon-Controlschevron-down"></use>
      </svg>
    </components.DropdownIndicator>
  ) : null;
};

// ----------------------------------------------------
// 🎨 СТИЛІЗАЦІЯ react-select
// ----------------------------------------------------

const customStyles: StylesConfig<SelectOption, false> = {
  // Контейнер, що обгортає все (відповідає вашому .addRecipeFormCategoryInput)
  control: (provided, state) => ({
    ...provided,
    height: '48px',
    width: '172px',
    minHeight: '48px',
    borderRadius: '8px',
    borderColor: state.isFocused ? 'var(--light-gray)' : 'var(--black)',
    boxShadow: state.isFocused ? 'none' : 'none',
    padding: '8px', // Змінюємо внутрішній відступ
    cursor: 'pointer',
    fontSize: 'var(--body-lg-regular)',
    '&:hover': {
      backgroundColor: 'var(--light-gray-2)',
    },
  }), // Сам випадаючий список (з'являється при кліку)

  menu: (provided) => ({
    ...provided,
    borderRadius: '8px',
    marginTop: '4px',
    backgroundColor: 'var(--white)',
    boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.15)',
    zIndex: 100,
  }), // Обгортка для опцій (додаємо максимальну висоту та скрол)

  menuList: (provided) => ({
    ...provided, // Реалізація вертикального скролу:
    maxHeight: '180px', // Фіксована максимальна висота, щоб активувати скрол
    overflowY: 'auto',
    padding: '0',
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'var(--light-gray)',
      borderRadius: '4px',
    },
  }), // Кожна окрема опція

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'var(--light-gray-2)' : 'var(--white)', // Колір при наведенні
    color: 'var(--black)',
    cursor: 'pointer',
    padding: '8px 16px',
    fontSize: 'var(--body-md-regular)', // Колір для вже обраної опції (якщо вона не у фокусі)
    ...(state.isSelected && {
      backgroundColor: 'var(--light-gray-2)',
      color: 'var(--black)',
    }),
  }), // Іконка-стрілка (замінюємо на кастомну)

  dropdownIndicator: (provided) => ({
    ...provided, // Прибираємо стандартний колір/заливку react-select
    color: 'transparent',
    padding: '8px 12px',
  }), // Видаляємо роздільник стрілки

  indicatorSeparator: () => ({ display: 'none' }),
};

// ----------------------------------------------------
// ⚛️ КОМПОНЕНТ FormikSelect
// ----------------------------------------------------

export const FormikSelect: React.FC<FormikSelectProps> = ({
  label,
  options,
  placeholder,
  ...props
}) => {
  // Хук Formik для зв'язку поля з формою
  const [field, meta, helpers] = useField(props); // Функція для обробки зміни, що оновлює Formik

  const handleChange = (option: SelectOption | null) => {
    helpers.setValue(option ? option.value : '');
  }; // Знаходимо поточне обране значення для відображення

  const selectedOption = options.find((option) => option.value === field.value);

  const hasError = meta.touched && meta.error;

  return (
    <label className={css.addRecipeFormBlockSubtitle}>
      {label}
      <Select
        {...field}
        {...props}
        options={options}
        value={selectedOption || null} // Поточне значення
        onChange={handleChange} // Обробник зміни
        onBlur={() => helpers.setTouched(true)} // Обробник втрати фокусу для Formik
        isClearable={false} // Забороняє очищення поля
        placeholder={placeholder}
        styles={customStyles} // Застосовуємо наші стилі
        classNamePrefix="react-select" // Префікс для кастомних класів, якщо потрібні додаткові стилі
        // ✅ ІНТЕГРУЄМО КАСТОМНУ СТРІЛКУ
        components={{ DropdownIndicator }} // Додаткові класи для відображення помилки
        className={hasError ? css['is-invalid'] : ''}
      />
      {hasError && <div className={css.errorMessage}>{meta.error}</div>}
    </label>
  );
};
