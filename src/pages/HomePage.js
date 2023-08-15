import EasyToImplement from '../components/home/EasyToImplement';
import Features from '../components/home/Features';
import Hero from '../components/home/Hero';
import SimpleUXUI from '../components/home/SimpleUXUI';
import WhoWeWorkWith from '../components/home/WhoWeWorkWith';

const HomePage = () => {
  return (
    <div className='flex flex-col items-center'>
      <Hero />
      <WhoWeWorkWith />
      <EasyToImplement />
      <SimpleUXUI />
      <Features />
    </div>
  );
};

export default HomePage;
