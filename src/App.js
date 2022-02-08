import {
  BrowserRouter,Routes, Route
} from 'react-router-dom';
import Home from "./components/pages/Home";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
      
  );
}

export default App;
