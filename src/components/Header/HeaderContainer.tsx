import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from "react";
import myAvatar from "../../assets/jpeg/myAvarat.jpg";
import Image from "react-bootstrap/Image";
import GoBack from "../GoBack/GoBack";
import PostsInputRender from "../PostsListRender/PostsInputRender";
import PostInputContainer from "../PostInput/PostInputContainer";

function HeaderContainer() {

    return <div>

        <Navbar bg="light" expand={false} className="mb-3" fixed="top"
                collapseOnSelect={true}
        >
            <Container fluid>

                <Navbar.Text>
                    <PostInputContainer/>
                </Navbar.Text>
                <Navbar.Toggle/>
                <Navbar.Offcanvas
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title/>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav>
                            <Nav.Link href='/'>Список постов</Nav.Link>
                            <Nav.Link href='/#/about-me'>Обо мне
                            <Image fluid={true} src={myAvatar} className={"rounded"}
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