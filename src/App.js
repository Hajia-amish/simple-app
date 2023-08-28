import React from 'react';
import './App.css';
import botton from 'react-bootstrap/botton';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row,Col, Botton, Alert ,Breadcrumb,Card ,Form }  from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluld>
          <Navbar />
          
        <form>
          <Row>
            <Col md> 
            <form.Group controId="formEmail">
            <form.lable>Email Address</form.lable>
            <form.control type="email" placeholder="Example@email.com"/>
            <form.Text className="text muted">
              We'll never share your email address,trust us!!
            </form.Text>
          </form.Group>
          </Col>
          <Col md>
          <form.Group controId="password">
            <form.lable>Password</form.lable>
            <form.control type="password" placeholder="password"/>
            <form.Text className="text muted">
              We'll never share your password,trust us!!
            </form.Text>
          </form.Group>
          </Col>
          </Row>
          <botton variant="secondary" type="submit">Login</botton>
        </form>
        <card className="mb-3" style={{color: "#DDD"}}>
        <card.ima src="https://picsum.photos/200/50" />
          <card.body>
            <card.title>
              Card Example
            </card.title>
            <card.test>
              This is an example of react bootstrap cards
            </card.test>
            <botton variant="primary">Read More</botton>
          </card.body>
        </card>
        <Breadcrumb>
        <Breadcrumb.item >Test</Breadcrumb.item>
        <Breadcrumb.item >Test 1</Breadcrumb.item>cd
        <Breadcrumb.item active>Test 2</Breadcrumb.item>
        </Breadcrumb>
        <Alert variant="success">This is a botton</Alert>
        <botton>Test Botton</botton>
</Container>
       
      </header>
    </div>
  );
}

export default App;
