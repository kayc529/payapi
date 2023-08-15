import { planFeatures } from '../../data/menu';
import SecondaryButton from '../SecondaryButton';

const PricingPlan = ({ name, desc, price, numOfFeatures }) => {
  const isFeatureIncluded = (index) => {
    return index + 1 <= numOfFeatures;
  };

  return (
    <li className='w-full max-w-[327px] flex flex-col items-center md:items-start md:w-1/3'>
      <h2 className='w-full font-display text-[32px] text-darkPink text-center md:pb-0 lg:text-start'>
        {name}
      </h2>
      <p className='text-sm text-grey text-center pt-4 md:pb-2 lg:text-start'>
        {desc}
      </p>
      <h1 className='font-display text-darkBlue text-center text-3xl pb-3 lg:text-start'>
        ${price}.00
      </h1>
      <div className='w-full h-[1px] bg-grey'></div>
      <ul className='flex flex-col py-6 space-y-4'>
        {planFeatures.map((feature, index) => {
          return (
            <div key={index} className='flex items-center'>
              {isFeatureIncluded(index) ? (
                <img
                  className='h-[8px] w-[12px] mr-6'
                  src={`${
                    isFeatureIncluded(index) &&
                    'assets/shared/desktop/icon-check.svg'
                  }`}
                  alt='check'
                />
              ) : (
                <div className='h-[8px] w-[12px] mr-6'></div>
              )}
              <p
                className={`capitalize text-[16px] ${
                  isFeatureIncluded(index) ? 'text-darkBlue' : 'text-grey'
                }`}
              >
                {feature}
              </p>
            </div>
          );
        })}
      </ul>
      <div className='w-full h-[1px] bg-grey'></div>
      <div className='w-full pt-6 flex justify-center lg:justify-start'>
        <SecondaryButton text='Request Access' />
      </div>
    </li>
  );
};

export default PricingPlan;
