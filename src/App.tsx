import Brand from './components/container/BrandSection';
import Hero from './components/container/HeroSection';
import Layout from './components/container/Layout';

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <Brand />
      </main>
    </Layout>
  );
}

export default App;
