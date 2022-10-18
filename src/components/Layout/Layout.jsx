
import {Link, Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import {useSelector} from "react-redux";
import style from "../Layout/Layout.module.css";

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
}

const Layout = () => {
    const {text: {idText}, image: {idImg}} = useSelector(state => state);
    return (
        <div style={wrapper}>
            <Header />
            <Outlet></Outlet>
            {idText && idImg && (
                <Link  className={style.btn} to={`singleCard/${idText}/${idImg}`}>
                    Поделиться открыткой
                </Link>
            )}
            <Footer />
        </div>
    )
}

export default Layout;