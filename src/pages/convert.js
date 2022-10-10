import React from 'react';
import {Container,Row,Col, ProgressBar} from 'react-bootstrap';
import { useEffect } from 'react';

function Convert(props) {

    return (
        <div>
            <Container>
                <Row style={{marginTop:"15vh"}}>
                    <Col>
                        <h1>Converting...</h1>
                    </Col>
                </Row>
                <Row style={{marginTop:"10vh"}}>
                    <Col>
                        <ProgressBar animated now={100} />
                        <div id="file">
                            aa
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default Convert;