import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Card from "./components/Card/Card";
import {ImgContextProvider} from "./context/imgContext";

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
}

const App = () =>  {
  return (
    <div>
      <div style={wrapper}>
              <ImgContextProvider>
                      <Header />
                      <Card/>
                      <Footer />
              </ImgContextProvider>
      </div>
    </div>
  );
}

export default App;
