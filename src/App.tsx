import About from './components/container/AboutSection';
import Brand from './components/container/BrandSection';
import ContactMe from './components/container/ContactMeSection';
import Hero from './components/container/HeroSection';
import Industry from './components/container/IndustrySection';
import Layout from './components/container/Layout';
import Portofolio from './components/container/PortofolioSection';
import Process from './components/container/ProcessSection';
import Qna from './components/container/QnaSection';
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
        <Qna />
        <ContactMe />
      </main>
    </Layout>
  );
}

export default App;
