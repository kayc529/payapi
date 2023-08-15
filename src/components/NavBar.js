import PrimaryButton from './PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../data/menu';
const NavBar = ({ toggleSideBar }) => {
  const navigate = useNavigate();

  const onButtonClick = (e) => {
    navigate('contact');
  };

  const goToHomePage = (e) => {
    navigate('/');
  };

  return (
    <nav className='w-full flex items-center px-4 pt-8 justify-between mx-auto lg:max-w-[1100px]'>
      <div className='flex items-center'>
        {/* Logo */}
        <img
          className='cursor-pointer'
          src='assets/shared/desktop/logo.svg'
          alt='logo'
          onClick={goToHomePage}
        />
        {/* Menu */}
        <ul className='hidden md:flex md:space-x-10 md:px-16'>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className='text-grayishBlue font-bold capitalize hover:text-darkBlue'
                  href={item}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Schedule a demo button */}
      <div className='hidden md:block'>
        <PrimaryButton text='Schedule a Demo' onClick={onButtonClick} />
      </div>
      {/* Hamburger Icon */}
      <img
        className='block cursor-pointer md:hidden'
        src='assets/shared/mobile/menu.svg'
        alt='menu'
        onClick={toggleSideBar}
      />
    </nav>
  );
};

export default NavBar;
