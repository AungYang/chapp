import {Row, Col } from 'antd';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




import React from 'react';
import '../App.css'

class Login extends React.Component {
render(){
  return (
    <Form>
  <Row className="align-items-center">
    <Col style={{marginLeft: "10px"}} sm={6} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
        Name
      </Form.Label>
      <Form.Control id="inlineFormInputName" placeholder= "Message" />
    </Col>
  
    <Col xs="auto" style={{marginLeft: "10px"}}className="my-1">
      <Button type="submit">Send Message</Button>
    </Col>
  </Row>
</Form>


  );
}};


export default Login;

