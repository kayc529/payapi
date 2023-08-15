import EmailInput from '../EmailInput';

const Hero = () => {
  return (
    <section className='' id='hero'>
      <div className='w-full flex flex-col-reverse items-center pb-20 lg:justify-between lg:flex-row lg:pt-6 lg:w-screen lg:max-w-[1100px]'>
        {/* Text Side */}
        <div className='flex flex-col w-[327px] md:w-[573px] lg:pl-6'>
          <h1 className='text-xl font-display text-veryDarkBlue text-center leading-lg pb-8 -mt-6 md:-mt-2 md:leading-2xl md:text-2xl lg:mt-0 lg:text-4xl lg:leading-3xl lg:max-w-[546px] lg:pb-10 lg:text-start'>
            Start building with our APIs for absolutely free.
          </h1>
          {/* input */}
          <div className='flex flex-col mx-auto lg:mx-0'>
            <EmailInput />
            {/* line under email input */}
            <p className='text-grayishBlue pt-4 text-center lg:pl-8 lg:text-start'>
              Have any questions?{' '}
              <a className='font-bold text-grayishBlue' href='contact'>
                Contact Us
              </a>
            </p>
          </div>
        </div>
        {/* Image Side*/}
        <div className='flex pt-4 justify-center items-center lg:pt-0'>
          <img
            className='pl-12 h-[340px] md:h-[400px] md:pl-4 lg:h-full'
            src='assets/home/desktop/illustration-phone-mockup.svg'
            alt='phone-mockup'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
