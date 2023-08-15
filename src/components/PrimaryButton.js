const PrimaryButton = ({
  text,
  onClick,
  isFullWidth = false,
  isDisabled = false,
}) => {
  return (
    <button
      className={`w-full text-sm font-bold text-white bg-darkPink h-[48px] md:w-[173px] hover:enabled:bg-pink rounded-full disabled:opacity-50${
        isFullWidth && ' container'
      }`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
