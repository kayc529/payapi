import ClientsGrid from '../ClientsGrid';
import SecondaryButton from '../SecondaryButton';

const WhoWeWorkWith = () => {
  return (
    <section className='wwww-bg w-screen flex justify-center bg-veryDarkBlue h-[670px] md:h-[615px] lg:h-[472px] items-center'>
      <div className='w-full flex flex-col-reverse items-center px-6 lg:flex-row lg:justify-between lg:max-w-[1100px]'>
        {/* Text Side */}
        <div>
          <div className='flex flex-col items-center w-[327px] md:w-[457px] lg:w-[445px] lg:items-start'>
            <h2 className='font-display text-waterWhite text-xl md:text-2xl text-center pt-12 lg:pt-0 lg:text-start'>
              Who we work with
            </h2>
            <p className='text-grey text-sm pt-6 pb-10 leading-sm text-center lg:py-8 lg:text-start'>
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </p>
            <SecondaryButton text='About Us' isDarkMode={true} />
          </div>
        </div>
        {/* Brand side */}
        <ClientsGrid />
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
