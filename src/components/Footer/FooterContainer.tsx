import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import PostInputContainer from "../PostInput/PostInputContainer";
import {Col} from "react-bootstrap";

function FooterContainer() {

    return <div >

        <Navbar bg="light" expand={false} fixed="bottom"
                collapseOnSelect={true}
                className='border-bottom shadow'
        >
        </Navbar>
    </div>
}

export default FooterContainer;