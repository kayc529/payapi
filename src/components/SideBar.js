import { menuItems } from '../data/menu';
import PrimaryButton from './PrimaryButton';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ toggle, isOpened = false }) => {
  const navigate = useNavigate();

  if (!isOpened) {
    return <div></div>;
  }

  const onButtonClick = (e) => {
    //toggle side bar
    navigate('contact');
  };

  return (
    <aside
      className={`fixed right-0 z-10 w-3/4 px-8 pt-12 max-w-[300px] h-full bg-veryDarkBlue flex flex-col ${
        isOpened ? 'sidebar-open' : 'sidebar-close'
      } md:hidden`}
    >
      <div className='flex container justify-end'>
        <img
          onClick={toggle}
          className='cursor-pointer'
          src='assets/shared/mobile/close.svg'
          alt=''
        />
      </div>
      <span className='container h-[1px] bg-grey mt-8' />
      <ul className='cotainer flex flex-col py-10 space-y-8 items-center'>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a
                className='text-waterWhite text-[20px] font-bold capitalize hover:text-darkBlue'
                href={item}
              >
                {item}
              </a>
            </li>
          );
        })}
        <PrimaryButton
          text='Schedule a Demo'
          onClick={onButtonClick}
          isFullWidth={true}
        />
      </ul>
    </aside>
  );
};

export default SideBar;
