import About from './components/container/AboutSection';
import Brand from './components/container/BrandSection';
import Hero from './components/container/HeroSection';
import Layout from './components/container/Layout';
import Process from './components/container/ProcessSection';
import Service from './components/container/ServiceSection';

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <Brand />
        <About />
        <Process />
        <Service />
      </main>
    </Layout>
  );
}

export default App;
