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
    const writeToContentDiv=(txt)=>{
        return new Promise((resolve,reject)=>{
            document.getElementById('content').innerHTML=txt;
            document.getElementById('contentBox').style.display="block";
            document.getElementById('upload').style.display="none";
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
            return writeToContentDiv(res);
        })
        .then((res)=>{
            console.log("Dosya içeriği yazma başarılı");
            return;
        })
        .catch((err)=>{
            console.log(err);
        })
        .finally(()=>{
            console.log("Dosya okuma işlemi tamamlandı.");
        })
    }
    const continueToConvert=()=>{

    }
    const cancelFile=()=>{
        window.location.reload();
    }
    
    return (
        <div>
            <Container>
                <Row style={{marginTop:"15vh"}}>
                    <Col>
                        <h1>Homepage</h1>
                    </Col>
                </Row>
                <Row style={{display:'none'}} id="contentBox">
                    <textarea style={{width:'80%',height:'20vw'}} id="content">
                        
                    </textarea><br></br>
                    <Button variant="primary" type="submit" onClick={continueToConvert} style={{width:'10vw', marginTop:'1vw', marginRight:'3vw'}}>Continue</Button>
                    <Button variant="danger" type="submit" onClick={cancelFile} style={{width:'10vw',marginTop:'1vw'}}>Cancel</Button>
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