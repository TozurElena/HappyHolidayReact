import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Card from "./components/Card/Card";
import {TextContextProvider} from "./context/textContext";
import {ImgContextProvider} from "./context/imgContext";
import {HolidaysContextProvider} from "./context/holidaysContext";

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
}


const App = () =>  {
  return (
    <div>
      <div style={wrapper}>
          <HolidaysContextProvider>
              <ImgContextProvider>
                  <TextContextProvider>
                      <Header />
                      <Card/>
                      <Footer />
                  </TextContextProvider>
              </ImgContextProvider>
          </HolidaysContextProvider>

      </div>
    </div>
  );
}

export default App;
