import About from './components/container/AboutSection';
import Brand from './components/container/BrandSection';
import Hero from './components/container/HeroSection';
import Layout from './components/container/Layout';
import Process from './components/container/ProcessSection';

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <Brand />
        <About />
        <Process />
      </main>
    </Layout>
  );
}

export default App;
