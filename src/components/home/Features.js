const Features = () => {
  return (
    <section className=''>
      <ul className='w-screen flex flex-col space-y-12 pb-16 md:pb-24 md:space-y-0 md:flex-row md:px-2 md:space-x-2 lg:space-x-4 lg:max-w-[1100px]'>
        {/* Personal Finances */}
        <li className='w-full flex flex-col items-center md:w-1/3'>
          <img
            className='h-[106px] md:h-[88px] lg:h-[106px]'
            src='assets/home/desktop/icon-personal-finances.svg'
            alt='personal-finances'
          />
          <h3 className='font-bold text-md text-darkBlue text-center pt-6 pb-4'>
            Personal Finances
          </h3>
          <p className='text-sm text-grey text-center w-[327px] md:w-full'>
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.
          </p>
        </li>
        {/* Banking & Coverage */}
        <li className='w-full flex flex-col items-center md:w-1/3'>
          <img
            className='h-[106px] md:h-[88px] lg:h-[106px]'
            src='assets/home/desktop/icon-banking-and-coverage.svg'
            alt='personal-finances'
          />
          <h3 className='font-bold text-md text-darkBlue text-center pt-6 pb-4'>
            Banking & Coverage
          </h3>
          <p className='text-sm text-grey text-center w-[327px] md:w-full'>
            With our platform, you can speed up account onboarding and support
            ongoing payments for checking, savings, credit card, and brokerage
            accounts.
          </p>
        </li>
        {/* Consumer Payments */}
        <li className='w-full flex flex-col items-center md:w-1/3'>
          <img
            className='h-[106px] md:h-[88px] lg:h-[106px]'
            src='assets/home/desktop/icon-consumer-payments.svg'
            alt='personal-finances'
          />
          <h3 className='font-bold text-md text-darkBlue text-center pt-6 pb-4'>
            Consumer Payments
          </h3>
          <p className='text-sm text-grey text-center w-[327px] md:w-full'>
            It’s easier to set up secure bank payments with us through a flow
            designed with the user experience in mind. Customers could instantly
            authenticate their account.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Features;
