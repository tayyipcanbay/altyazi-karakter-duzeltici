import React, { useEffect } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Form, Button} from 'react-bootstrap';


function Homepage(props) {
    const getFile=()=>{
        return new Promise((resolve,reject)=>{
            if(document.getElementById('file').files.length===0){
                reject("No file selected");
            }
            else{
                resolve(document.getElementById('file').files[0]);
            }
        })
    }
    const readFile=(file)=>{
        return new Promise((resolve,reject)=>{
            var reader=new FileReader();
            reader.onload=function(){
                resolve(reader.result);
            }
            reader.onerror=function(){
                reject("Error reading file");
            }
            reader.readAsText(file);
        })
    }
    const convertTurkish=(txt)=>{
        return new Promise((resolve,reject)=>{
            props.file=txt;
            resolve();
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        getFile()
        .then((file)=>{
            console.log("Dosya yükleme başarılı.\n Dosya okumaya başlanıyor ...",file);
            return readFile(file);
        })
        .then((res)=>{
            console.log("Dosya okuma başarılı");
            console.log("Okunan dosya içeriği: \n",res);

        })
        .then((res)=>{
            console.log("Dosya içeriği Türkçeleştiriliyor ...");
            return convertTurkish(res);
        })
        .then(console.log("App.js içindeki file dosyası:\n",props.file))
        .catch((err)=>{
            console.log(err);
        })
    }
    
    return (
        <div>
            <Container>
                <Row style={{marginTop:"15vh"}}>
                    <Col>
                        <h1>Homepage</h1>
                    </Col>
                </Row>
                <Row style={{display:'none'}} id="content">

                </Row>
                <Row id="upload" style={{marginTop:"10vh"}}>
                    <Col>
                        <p style={{border:'1px solid black'}}>This tool fixes Turkish character issue on your subtitle files</p>
                        <div>
                            <Form >
                                <Form.Group className="mb-3">
                                    <Form.Label>Upload your file</Form.Label>
                                    <Form.Control id="file" type="file" />
                                </Form.Group>
                                <Button onClick={handleSubmit} variant="primary" type="submit">Submit</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
export default Homepage;