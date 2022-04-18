import './assets/styles/App.css';

import { BrowserRouter } from "react-router-dom";

import Header from './layouts/Header'
import Footer from './layouts/Footer'
import NavRoutes from './routes/Routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
