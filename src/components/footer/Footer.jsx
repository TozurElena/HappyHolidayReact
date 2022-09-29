import Container from "../Container/Container.jdx";
import style from './Footer.module.css';
import { ReactComponent as VKIcon } from "../../img/vk.svg";
import { ReactComponent as TGIcon } from "../../img/tg.svg";
import { ReactComponent as PinIcon} from "../../img/pinterest.svg";
import { ReactComponent as StumIcon } from "../../img/stumbleupon.svg";

const Footer = () => (
    <footer className={style.footer}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.contacts}>
                    <p>Design: <a href='https://t.me/Mrshamallowww'> Anastasia Ilina</a> </p>
                    <p>Сoder: <a href='#'>LeTo</a></p>
                    <p>© HBCard, 2022</p>
                </div>
                <ul className={style.social}>
                    <li className={style.item}>
                        <a href="https://vk.com" className={style.link}>
                            <VKIcon/>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://t.me" className={style.link}>
                            <TGIcon/>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://pinterest.com" className={style.link}>
                            <PinIcon/>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https://stumbleupon.com" className={style.link}>
                            <StumIcon/>
                        </a>
                    </li>
                </ul>
            </div>

        </Container>

    </footer>
);

export default Footer;


