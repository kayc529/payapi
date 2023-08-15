import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ReadyToStart from '../components/ReadyToStart';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';

const SharedLayout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const location = useLocation();
  const [bgTag, setbgTag] = useState('hero-bg-home');

  useEffect(() => {
    if (location.pathname === '/') {
      setbgTag('hero-bg-home');
    } else {
      setbgTag('hero-bg-others');
    }
  }, [location]);

  const toggleSideBar = (e) => {
    setIsSideBarOpen((prev) => !prev);
  };

  // TODO
  // Change bg position when in different page

  return (
    <main className={`${bgTag} relative flex flex-col h-screen font-public`}>
      <SideBar isOpened={isSideBarOpen} toggle={toggleSideBar} />
      <div className='flex flex-col justify-center items-center'>
        <NavBar toggleSideBar={toggleSideBar} />
        <Outlet />
        <ReadyToStart />
      </div>
      <Footer />
    </main>
  );
};

export default SharedLayout;
