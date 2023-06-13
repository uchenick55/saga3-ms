import {userDataType} from "../../common/commonTypes/commonTypes";
import React from "react";
import {Accordion, Col, ListGroup, Row} from "react-bootstrap";

type UserCardType = {
    userData: userDataType
}
const UserCard: React.FC<UserCardType> = ({userData}) => { // отрисовка карточки пользователя (автора постов)
    const {id, name, username, email, address, phone, website, company} = userData
    return <div className='my-3'>
        <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="0">
                <Accordion.Header><h4>{name} </h4></Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col className='p-2' lg={3} md={6}>{/*lg={6} md={12}*/}
                            <ListGroup>
                                <ListGroup.Item variant="primary"><b>id:</b> {id}</ListGroup.Item>
                                <ListGroup.Item variant="primary"><b>username:</b> {username}</ListGroup.Item>
                                <ListGroup.Item variant="primary"><b>email:</b> {email}</ListGroup.Item>
                                <ListGroup.Item variant="primary"><b>phone:</b> {phone}</ListGroup.Item>
                                <ListGroup.Item variant="primary"><b>website:</b> {website}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col className='p-2'  lg={3} md={6}>
                            <ListGroup >

                                <ListGroup.Item variant="primary"><b>address</b></ListGroup.Item>
                                <ListGroup.Item variant="secondary"><b>street:</b> {address?.street}</ListGroup.Item>
                                <ListGroup.Item variant="secondary"><b>suite:</b> {address?.suite}</ListGroup.Item>
                                <ListGroup.Item variant="secondary"><b>city:</b> {address?.city}</ListGroup.Item>
                                <ListGroup.Item variant="secondary"><b>zipcode:</b> {address?.zipcode}</ListGroup.Item>

                            </ListGroup>

                        </Col>
                        <Col className='p-2'  lg={3} md={6}>
                            <ListGroup>

                                <ListGroup.Item variant="primary"><b>geo</b></ListGroup.Item>
                                <ListGroup.Item variant="secondary"><b>lat:</b>{address?.geo?.lat} </ListGroup.Item>
                                <ListGroup.Item variant="secondary"><b>lng:</b>{address?.geo?.lng}</ListGroup.Item>

                            </ListGroup>

                        </Col>
                        <Col className='p-2'  lg={3} md={6}>
                            <ListGroup>

                                <ListGroup.Item variant="primary"><b>company</b></ListGroup.Item>
                                <ListGroup.Item variant="secondary"><b>name:</b> {company?.name}</ListGroup.Item>
                                <ListGroup.Item variant="secondary"><b>catchPhrase:</b> {company?.catchPhrase}</ListGroup.Item>
                                <ListGroup.Item variant="secondary"><b>bs:</b> {company?.bs}</ListGroup.Item>
                            </ListGroup>

                        </Col>

                    </Row>





                </Accordion.Body>
            </Accordion.Item>
        </Accordion>


    </div>
}
export default UserCard