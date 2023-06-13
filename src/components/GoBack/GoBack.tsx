import {useNavigate} from "react-router-dom";
import Image from "react-bootstrap/Image";
import goBack from "../../assets/svg/back-arrow1.svg";
import s from "../../common/classes/common.module.css";
import React from "react";

const GoBack: React.FC = () => {
    const navigate = useNavigate(); // хук для навигации по страницам (кнопка назад)

    return <Image src={goBack} className={s.goBack}
                  alt={"go back"} title={"go back"}
                  onClick={() => navigate( -1 )} // при клике перейти назад по истории
    />
}
export default GoBack