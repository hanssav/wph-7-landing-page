import About from './components/container/AboutSection';
import Brand from './components/container/BrandSection';
import Hero from './components/container/HeroSection';
import Industry from './components/container/IndustrySection';
import Layout from './components/container/Layout';
import Portofolio from './components/container/PortofolioSection ';
import Process from './components/container/ProcessSection';
import Service from './components/container/ServiceSection';
import Testimonial from './components/container/TestimonialSection/Testimonial';

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <Brand />
        <About />
        <Process />
        <Service />
        <Industry />
        <Portofolio />
        <Testimonial />
      </main>
    </Layout>
  );
}

export default App;
