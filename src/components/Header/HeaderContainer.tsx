import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import PostInputContainer from "../PostInput/PostInputContainer";
import {Col} from "react-bootstrap";

function HeaderContainer() {

    return <div>

        <Navbar bg="light" expand={false} className="mb-3" fixed="top"
                collapseOnSelect={true}
        >
            <Container fluid>
                <Col> <PostInputContainer/> </Col>
            </Container>
        </Navbar>
    </div>
}

export default HeaderContainer;