import './assets/styles/App.css';

import { BrowserRouter } from "react-router-dom";

import Header from './layouts/Header'
import Footer from './layouts/Footer'
import NavRoutes from './routes/Routes'

function App() {
  return (
    <div className="page-container">
      <BrowserRouter>
        <Header />
        <div className='contant-wrap'>
          <NavRoutes />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
