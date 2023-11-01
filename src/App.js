import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer, Categorized } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Categorized />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
