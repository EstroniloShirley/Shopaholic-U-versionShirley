import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer, NavBar, BestSeller } from './components';
import { Hero } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <NavBar />
      <BestSeller />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
