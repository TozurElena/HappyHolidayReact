import Container from "../Container/Container.jdx";
import style from "../Header/Header.module.css";
import Choices from "./Choices/Choices";

const Header = () => (
     <header className={style.header}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.buttons}>
                    <button className={style.button}>Поменять поздравление</button>
                    <button className={style.button}>Поменять фон</button>
                </div>
                <Choices/>
            </div>
        </Container>
     </header>
 );


export default Header;
