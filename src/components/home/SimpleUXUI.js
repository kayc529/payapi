const SimpleUXUI = () => {
  return (
    <section className='simple-ui-bg w-screen flex flex-col items-center py-20 lg:py-0 lg:justify-center lg:h-[780px] lg:-mt-20'>
      <div className='w-full flex flex-col-reverse items-center lg:flex-row lg:max-w-[1100px] lg:justify-between'>
        {/* Text Container */}
        <div className='flex flex-col lg:pl-4 lg:w-1/2'>
          <h1 className='font-display text-veryDarkBlue text-xl text-center pb-4 -mt-8 md:-mt-10 md:text-2xl lg:text-start'>
            Simple UX & UI
          </h1>
          <p className='text-sm text-grey text-center lg:text-start w-[327px] md:w-[573px] lg:w-[445px]'>
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
        {/* Image Container for large screen */}
        <div className='hidden mt-24 lg:block lg:w-1/2'>
          <div className='illust-simple-ui w-full h-[700px]'></div>
        </div>
        {/* Image container for >large screens */}
        <div className='ml-10 md:ml-12 max-w-[573px] lg:hidden'>
          <img
            className=''
            src='assets/home/desktop/illustration-simple-ui.svg'
            alt='simple-ui'
          />
        </div>
      </div>
    </section>
  );
};

export default SimpleUXUI;
