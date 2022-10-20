import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>Left side nav</h3>
                </Col>
                <Col>
                    <Outlet></Outlet>
                </Col>
                <Col>
                    <h3>Right side nav</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default Main;