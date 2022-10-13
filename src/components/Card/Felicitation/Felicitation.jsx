import style from "./Felicitation.module.css";
import {useSelector} from "react-redux";


const Felicitation = () => {

        const {text, loading} = useSelector(state => state.text);

        return (
            <p className={style.felicitation}>
                {loading === 'loading' ? 'Loading...' :
                text === '' ? "Quel raison de fête ?" : text}
            </p>
        );
}

export default Felicitation;
