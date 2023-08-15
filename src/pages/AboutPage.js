import { teamData } from '../data/menu';
const AboutPage = () => {
  return (
    <section className='w-screen flex flex-col items-center py-16 '>
      <div className='w-full flex flex-col items-center px-4 lg:max-w-[1100px]'>
        {/* Title */}
        <h1 className='font-display text-darkBlue text-[32px] text-center leading-[36px] w-[327px] md:w-[573px] md:text-2xl md:leading-2xl pb-16 lg:text-start lg:text-3xl lg:-ml-60 lg:w-[660px] lg:leading-2xl'>
          We empower innovators by delivering access to the financial system
        </h1>
        {/* Vision and Business */}
        <div className='flex flex-col space-y-12'>
          <div className='flex flex-col md:items-start md:flex-row'>
            <h2 className='font-display text-darkBlue text-lg pb-4 md:text-[32px] text-center md:-mt-2 md:text-start md:w-[255px]'>
              Our Vision
            </h2>
            <p className='text-sm text-grey w-[327px] text-center md:text-start md:w-[456px] lg:w-[635px]'>
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.
            </p>
          </div>
          <div className='flex flex-col md:items-start md:flex-row'>
            <h2 className='font-display text-darkBlue text-lg pb-4 md:text-[32px] text-center md:-mt-2 md:text-start md:w-[255px]'>
              Our Business
            </h2>
            <p className='text-sm text-grey w-[327px] text-center md:text-start md:w-[456px] lg:w-[635px]'>
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className='relative flex flex-col justify-center w-screen mt-28 mb-20 md:h-[267px] lg:h-[780px] lg:mt-0 lg:mb-0'>
        <img
          className='absolute hidden lg:block -left-[570px]'
          src='assets/shared/desktop/bg-pattern-circle.svg'
          alt=''
        />
        <img
          className='z-[2] w-full max-h-[500px] object-cover'
          src='assets/about/desktop/image-team-members.jpg'
          alt=''
        />
      </div>

      {/* Team details md+ screen */}
      <ul className='hidden w-full flex-row space-y-8 px-8 md:flex md:space-y-0 md:space-x-4 lg:max-w-[1100px] lg:-mt-20'>
        {teamData.map((data, index) => {
          return (
            <li className='flex flex-col w-full border-y-[2px] border-lightGrey py-6 md:w-1/3'>
              <p className='text-[16px] text-darkBlue'>{data.title}</p>
              <h2 className='font-display text-3xl text-darkPink leading-3xl'>
                {data.number}
              </h2>
            </li>
          );
        })}
      </ul>
      {/* Team details sm screen */}
      <div className='w-full max-w-[327px] flex flex-col border-y-[2px] border-lightGrey py-4 space-y-6 md:hidden'>
        {teamData.map((data, index) => {
          return (
            <li className='flex flex-col w-full items-center '>
              <p className='text-[16px] text-darkBlue'>{data.title}</p>
              <h2 className='font-display text-3xl text-darkPink leading-3xl'>
                {data.number}
              </h2>
            </li>
          );
        })}
      </div>

      {/* Culture and People */}
      <div className='flex flex-col space-y-12 pt-16 pb-4'>
        <div className='flex flex-col md:items-start md:flex-row'>
          <h2 className='font-display text-darkBlue text-lg pb-4 md:text-[32px] text-center md:-mt-2 md:text-start md:w-[255px]'>
            The Culture
          </h2>
          <p className='text-sm text-grey w-[327px] text-center md:text-start md:w-[456px] lg:w-[635px]'>
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
        </div>
        <div className='flex flex-col md:items-start md:flex-row'>
          <h2 className='font-display text-darkBlue text-lg pb-4 md:text-[32px] text-center md:-mt-2 md:text-start md:w-[255px]'>
            The People
          </h2>
          <p className='text-sm text-grey w-[327px] text-center md:text-start md:w-[456px] lg:w-[635px]'>
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
