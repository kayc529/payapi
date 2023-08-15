import PrimaryButton from './PrimaryButton';

const EmailInput = () => {
  return (
    <div className='relative flex flex-col md:flex-row'>
      <input
        className='font-bold bg-white text-sm w-[327px] md:w-[445px] h-[48px] rounded-[24px] px-8 py-4 drop-shadow-xl focus:outline-none'
        type='text'
        placeholder='Enter email address'
      />
      <div className='z-[1] pt-4 md:pt-0 md:-ml-[173px]'>
        <PrimaryButton text='Schedule a Demo' />
      </div>
    </div>
  );
};

export default EmailInput;
