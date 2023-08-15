import { useState } from 'react';

const ContactFormInput = ({
  onChange,
  name,
  value = '',
  type = 'text',
  placeholder = '',
  isValid = true,
}) => {
  const onInputChange = (e) => {
    const value = e.target.value;
    if (onChange != null) {
      onChange(name, value);
    }
  };

  return (
    <div className='relative flex flex-col hover:cursor-pointer h-[59px]'>
      <input
        type={type}
        value={value}
        className={`outline-none text-sm text-darkBlue border-b-2 h-[42px] bg-transparent px-4 pb-2 focus:border-darkBlue hover:cursor-pointer ${
          isValid || 'border-red-300'
        }`}
        onChange={onInputChange}
      />
      <p className='text-red-300 text-[11px] pt-2'>
        {isValid || 'This field cannot be empty'}
      </p>
      <p
        className={`absolute -z-10 select-none text-sm top-1 left-4 hover:cursor-pointer ${
          isValid ? 'text-grey' : 'text-red-300'
        } ${value.length > 0 ? 'hidden' : 'block'}`}
      >
        {placeholder}
      </p>
    </div>
  );
};

export default ContactFormInput;
