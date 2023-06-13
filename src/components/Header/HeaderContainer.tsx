import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import PostInputContainer from "../PostInput/PostInputContainer";
import {Col} from "react-bootstrap";

function HeaderContainer() {

    return <div >

        <Navbar bg="light" expand={false} fixed="top"
                collapseOnSelect={true}
                className='mb-3 border-bottom shadow'
        >
            <Container fluid >
                <Col> <PostInputContainer/> </Col>
            </Container>
        </Navbar>
    </div>
}

export default HeaderContainer;