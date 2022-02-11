import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleSong from "./pages/SingleSong";
import MyPlayList from "./pages/MyPlayList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/song/:id" element={<SingleSong />} />
          <Route path="/myplaylist/:id" element={<MyPlayList />} />
          <Route path="/myplaylist" element={<MyPlayList />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
