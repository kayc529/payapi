import PricingPlan from '../components/pricing/PricingPlan';
import { pricingPlans } from '../data/menu';
const PricingPage = () => {
  return (
    <section>
      <div className='w-screen flex flex-col px-4 pt-16 pb-16 md:pb-24 lg:max-w-[1100px]'>
        <h1 className='font-display text-3xl text-darkBlue text-center lg:text-start'>
          Pricing
        </h1>
        <ul className='w-full flex flex-col pt-12 items-center space-y-12 md:space-y-0 md:items-start md:flex-row md:space-x-4 lg:space-x-6'>
          {pricingPlans.map((feature, index) => {
            return <PricingPlan {...feature} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default PricingPage;
