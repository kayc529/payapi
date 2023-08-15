const CheckBox = ({ onChange, isChecked = false, isDisabled = false }) => {
  const getCheckboxColor = () => {
    if (isDisabled) {
      return 'bg-darkBlue opacity-5';
    }

    if (isChecked) {
      return 'bg-darkPink';
    } else {
      return 'bg-darkBlue opacity-25';
    }
  };

  return (
    <label className='relative flex'>
      <input
        type='checkbox'
        disabled={isDisabled}
        checked={isChecked}
        className='checkbox'
        onChange={onChange}
      />
      <span
        className={`h-[24px] w-[24px] cursor-pointer ${getCheckboxColor()}`}
      ></span>
    </label>
  );
};

export default CheckBox;
