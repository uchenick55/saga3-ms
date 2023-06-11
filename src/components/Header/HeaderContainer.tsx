import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useNavigate} from "react-router-dom";
import goBack from "../../assets/svg/back-arrow1.svg";
import s from "../../common/classes/common.module.css";
import React from "react";
import myAvatar from "../../assets/jpeg/myAvarat.jpg";
import Image from "react-bootstrap/Image";

function HeaderContainer() {
    const navigate = useNavigate(); // хук для навигации по страницам (кнопка назад)

    const goBackRender = <img src={goBack} className={s.goBack}
                              alt={"go back"} title={"go back"}
                              onClick={() => navigate( -1 )} // при клике перейти назад по истории
    />

    return <div>

        <Navbar bg="light" expand={false} className="mb-3" fixed="top"
                collapseOnSelect={true}
        >
            <Container fluid>
                <Navbar.Brand href="#">        {goBackRender}
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Offcanvas
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                            Меню
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href='/'>Список постов</Nav.Link>
                            <Nav.Link href='/#/about-me'>Обо мне
                            <Image fluid={true} src={myAvatar} className={s.PostItemImage}
                                   alt={"аватар"} title={`аватар`}
                            /></Nav.Link>
                            <Nav.Item>Евгений Сазонов</Nav.Item>
                            <Nav.Link href="mailto:uchenick55@yandex.ru">uchenick55@yandex.ru</Nav.Link>

                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </div>
}

export default HeaderContainer;