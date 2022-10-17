import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Card from "./components/Card/Card";

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
                      <Card/>
                      <Footer />
      </div>
    </div>
  );
}

export default App;
