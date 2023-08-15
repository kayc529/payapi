import EmailInput from './EmailInput';
const ReadyToStart = () => {
  return (
    <section className='w-screen'>
      <div className='flex flex-col w-full px-4 pb-20 md:pb-24 mx-auto items-center space-y-4 lg:space-y-0 lg:justify-between lg:flex-row lg:max-w-[1100px]'>
        <h1 className='font-display text-darkBlue text-xl md:text-2xl'>
          Ready to start?
        </h1>
        <EmailInput />
      </div>
    </section>
  );
};

export default ReadyToStart;
