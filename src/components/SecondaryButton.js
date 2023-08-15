const SecondaryButton = ({
  text,
  onButtonClick,
  isDarkMode = false,
  isDisabled = false,
}) => {
  const getClassName = () => {
    if (isDarkMode) {
      return 'border-[1px] border-white font-bold text-white text-sm rounded-full px-10 py-3 hover:enabled:bg-white hover:enabled:border-0 hover:enabled:text-veryDarkBlue disabled:border-grey disabled:text-grey';
    } else {
      return 'border-[1px] border-darkBlue font-bold text-darkBlue bg-transpartent text-sm rounded-full px-10 py-3 hover:enabled:bg-darkBlue hover:enabled:text-white disabled:opacity-50';
    }
  };

  return (
    <div>
      <button
        disabled={isDisabled}
        className={getClassName()}
        onClick={onButtonClick}
      >
        {text}
      </button>
    </div>
  );
};

export default SecondaryButton;
