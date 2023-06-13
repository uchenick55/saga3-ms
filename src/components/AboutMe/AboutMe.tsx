import React from "react";
import Image from "react-bootstrap/Image";
import myAvatar from "../../assets/jpeg/myAvarat.jpg";

const AboutMe: React.FC = () => {
    return <div >
        <h2 className='d-flex justify-content-center'>Обо мне</h2>
        <h4>Евгений Сазонов</h4>
        <div><Image  fluid={true} src={myAvatar} className={"rounded py-3"} style={{width: "8rem"}}
                    alt={"аватар"} title={`аватар`}
        /></div>
        <p><a className='text-decoration-none'  href="mailto:uchenick55@yandex.ru">uchenick55@yandex.ru</a></p>
        <p><a className='text-decoration-none'  href="https://uchenick55.github.io/react-kabzda-1/#/mystack">Мой стек</a></p>
        <p><a className='text-decoration-none'  href="https://github.com/uchenick55/">Репозитории</a></p>
    </div>
}
export default AboutMe