const EasyToImplement = () => {
  return (
    <section className=''>
      <div className='w-screen flex flex-col pt-20 lg:flex-row items-center lg:justify-between lg:max-w-[1100px]'>
        {/* Image container for large screen*/}
        <div className='hidden illust-easy flex items-center pl-12 lg:block lg:-pl-0 lg:w-1/2 h-[444px]'></div>
        <div className='block ml-10 md:ml-12 lg:hidden'>
          <img
            src='assets/home/desktop/illustration-easy-to-implement.svg'
            alt=''
          />
        </div>
        {/* Text container */}
        <div className='flex flex-col -mt-10 md:-mt-14 lg:-mt-10 lg:w-1/2 lg:pl-4'>
          <h1 className='font-display text-veryDarkBlue text-xl text-center pb-4 md:text-2xl lg:text-start'>
            Easy to implement
          </h1>
          <p className='text-grey text-sm text-center w-[327px] md:w-[573px] lg:w-[445px] lg:text-start'>
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EasyToImplement;
