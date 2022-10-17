import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Card from "./components/Card/Card";
import EmptyCard from "./components/EmptyCard/EmptyCard";
import {Route, Routes} from "react-router-dom";

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
}

const App = () =>  {
  return (
    <div>
      <div style={wrapper}>
          <Header />
          <Routes>
              <Route path='card/:holiday' element={<Card/>} />
              <Route path='/' element={<EmptyCard/>} />
          </Routes>
          <Footer />
      </div>
    </div>
  );
}

export default App;
