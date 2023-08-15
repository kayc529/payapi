import { useNavigate } from 'react-router-dom';
import { menuItems, socialMediaItems } from '../data/menu';

const Footer = () => {
  const navigate = useNavigate();

  const goToHomePage = (e) => {
    navigate('/');
  };
  return (
    <footer className='footer-bg flex w-screen bg-veryDarkBlue justify-center pt-10 pb-20 mt-auto md:py-10'>
      {/* footer container */}
      <div className='w-full flex flex-col items-center mx-auto md:items-center md:flex-row md:justify-between md:px-4 lg:max-w-[1100px]'>
        {/* Logo + links container */}
        <div className='flex flex-col items-center md:flex-row'>
          <img
            className='cursor-pointer'
            src='assets/shared/desktop/logo-white.svg'
            alt='logo'
            onClick={goToHomePage}
          />
          <ul className='flex flex-col items-center space-y-4 py-10 md:py-0 md:space-y-0 md:items-start md:flex-row md:space-x-10 md:pl-14'>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    className='capitalize text-grey text-sm hover:text-white hover:font-bold'
                    href={item}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* social media icons container */}
        <div className='flex space-x-4'>
          {socialMediaItems.map((item, index) => {
            return (
              <img
                className={`${item}-icon h-[24px] w-[24px] cursor-pointer `}
                alt={item}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
