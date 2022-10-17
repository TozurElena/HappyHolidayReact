import style from './Choices.module.css';
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchHolidays, setHoliday} from "../../../store/holidaysSlice";
import {fetchText} from "../../../store/textSlice";
import {fetchImage, fetchImg} from "../../../store/imgSlice";
import {Link, NavLink} from "react-router-dom";

const Choices = () => {
    const [isOpenChoices, setIsOpenChoices] = useState(false);

    const {holiday, holidays, loading } = useSelector(state => state.holidays);
    const dispatch = useDispatch();

    const toggleChoices = () => {
        if (loading !== 'success') return;
        setIsOpenChoices(!isOpenChoices)
    };

    useEffect(() => {
        dispatch(fetchHolidays());

    }, [dispatch])

    return(
        <div className={style.wrapper}>
            <button className={style.button} onClick={toggleChoices}>
                {loading !== 'success' ? 'Loading...' : holidays[holiday] || 'Выбрать праздник'}</button>
            {isOpenChoices && (
                <ul className={style.list}>
                    {Object.entries(holidays).map(item => (
                        <li
                            className={style.item}
                            key={item[0]}
                            onClick={() => {
                                dispatch(setHoliday(item[0]));
                                dispatch(fetchText(item[0]));
                                dispatch(fetchImage(item[0]));
                                toggleChoices();
                            }}
                        >
                            <NavLink
                                to={`card/${item[0]}`}
                                className={({isActive}) => (isActive ? style.linkActive : '') }
                            >{item[1]}</NavLink>
                        </li>
                    ))}
                </ul>
                )

            }
        </div>
    )


};

export default Choices;
