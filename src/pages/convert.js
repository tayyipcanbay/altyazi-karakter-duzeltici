import React from 'react';
import {Container,Row,Col, ProgressBar} from 'react-bootstrap';
import { useEffect } from 'react';

function Convert(props) {
    useEffect((file=props.file)=>{
       async function writeFile(){
            return new Promise((resolve,reject)=>{
                resolve(file);
            })
       }
       writeFile()
       .then((res)=>{
            document.getElementById("convertedFile").innerHTML=res;
            console.log("res: \n",res);
         })
        .catch((err)=>{
            console.log(err);
        })
        .finally(()=>{
            console.log("Dosya yazma işlemi tamamlandı.");
        }
        )
    },[])
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
                        <pre id="convertedFile">

                        </pre>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default Convert;