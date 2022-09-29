import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
}

//!todo object temporaire
const style = {};

const App = () =>  {
  return (
    <div>
      <div style={wrapper}>
          <Header />
            <div className={style.card}>
                <div className={style.wrapper}>
                    <div className={style.img}>
                        <img className={style.img} src="" alt="" />
                        <p className={style.felicitation} >
                            Поздравляю с днем рожденья!
                            Пусть будет жизнь полна веселья,
                            Не будет грусти и хлопот,
                            А только счастье круглый год!

                            Желаю творческих успехов,
                            Прекрасных дней, улыбок, смеха.
                            Любви, душевного тепла,
                            Как сказка, чтобы жизнь была!

                        </p>
                    </div>
                </div>
            </div>
          <Footer />
      </div>
    </div>
  );
}

export default App;
