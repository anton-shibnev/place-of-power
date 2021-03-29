import { Hero } from '../components';
import HomePageContent from '../content/HomePageContent.json';

const Home = () => {
  return <Hero content={HomePageContent.hero} />;
};

export default Home;
