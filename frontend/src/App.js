import './styles/global.css'
import { Header } from './components/header';
import { FeaturedNews } from './components/featuredNews';
import { LatestNews } from './components/latestNews';
import { LastVideos } from './components/lastVideos';
import { Footer } from './components/footer';

export function App() {
  return (
    <div className="App">
      <Header />
      <FeaturedNews />
      <LatestNews />
      <LastVideos />
      <Footer />
    </div>
  );
}
