import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import myAvatar from "../../assets/jpeg/myAvarat.jpg";
import React from "react";

const Menu: React.FC = () => {
    return <div>
        <Navbar.Toggle/>
        <Navbar.Offcanvas
            placement="start"
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                </Offcanvas.Title>

            </Offcanvas.Header>

            <Offcanvas.Body>

                <Nav>
                    <Nav.Link href='#/'><h3>Список постов</h3></Nav.Link>
                    <Nav.Link href='#/about-me/'>
                        <Nav.Item><h3>Обо мне</h3>

                            <Image fluid={true} src={myAvatar} className={"rounded"} style={{height: "8rem"}}
                                   alt={"аватар"} title={`аватар`}
                            />
                        </Nav.Item>
                    </Nav.Link>
                    <Nav.Item>Евгений Сазонов</Nav.Item>
                    <Nav.Link
                        href="mailto:uchenick55@yandex.ru">uchenick55@yandex.ru
                    </Nav.Link>


                </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    </div>
}
export default Menu
