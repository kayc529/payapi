const ContactFormMessageInput = ({
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
    <div className='relative flex flex-col hover:cursor-pointer h-[89px]'>
      <textarea
        type={type}
        value={value}
        className={`resize-none outline-none text-sm text-darkBlue border-b-2 h-[89px] bg-transparent px-4 pt-1 focus:border-darkBlue hover:cursor-pointer ${
          isValid || 'border-red-300'
        }`}
        onChange={onInputChange}
      />
      <p className='text-red-300 text-[11px] pt-2'>
        {isValid || 'This field cannot be empty'}
      </p>
      <p
        className={`absolute select-none -z-10 text-sm top-1 left-4 hover:cursor-pointer ${
          isValid ? 'text-grey' : 'text-red-300'
        } ${value.length > 0 ? 'hidden' : 'block'}`}
      >
        {placeholder}
      </p>
    </div>
  );
};

export default ContactFormMessageInput;
