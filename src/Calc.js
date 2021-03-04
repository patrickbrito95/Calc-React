import React, { useState } from 'react';
import './Calc.css';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap';


function Calc() {
  
  const [number, setNumber] = useState('0');

  function addNumber(num){
    setNumber(number + num);
  }

  function chosenOpt(operation){
    setNumber(operation)
  }

  

  return (

     // CAIXA EM VOLTA DA APLICAÇÃO
    
    <Jumbotron style={{
      width: 500,
      height: 550,
      backgroundColor: '#000',
      marginLeft: '32%',
      marginTop: '5%'}}>

        {/* COLUNAS E PROPORÇÕES */}
    <Container>
      <Row>
          <Col xs="3">
          <Button onClick={() => chosenOpt('0')} variant="outline-danger">C</Button>
          </Col>
      
          <Col xs="9">
          <Form.Control 
          type="text" 
          className="text-right" 
          readOnly="readOnly" 
          value={number}/>
          </Col>
      </Row>
      <Row>

        {/* PRIMEIRA COLUNA */}

        <Col>
        <Button onClick={() => addNumber('7')} variant="dark" className="btn-number">7</Button>
        </Col>

        <Col>
        <Button onClick={() => addNumber('8')}variant="dark" className="btn-number">8</Button>
        </Col>

        <Col>
        <Button onClick={() => addNumber('6')}variant="dark" className="btn-number">9</Button>
        </Col>

        <Col>
        <Button onClick={() => chosenOpt('/')} variant="dark" className="btn-number">÷</Button>
        </Col>
      </Row>

      {/* SEGUNDA COLUNA */}

      <Row>
        <Col>
        <Button onClick={() => addNumber('4')} variant="dark" className="btn-number">4</Button>
        </Col>

        <Col>
        <Button onClick={() => addNumber('5')} variant="dark" className="btn-number">5</Button>
        </Col>

        <Col>
        <Button onClick={() => addNumber('6')} variant="dark" className="btn-number">6</Button>
        </Col>

        <Col>
        <Button onClick={() => chosenOpt('*')} variant="dark" className="btn-number">x</Button>
        </Col>
      </Row>

      {/* TERCEIRA COLUNA */}

      <Row>
        <Col>
        <Button onClick={() => addNumber('1')} variant="dark" className="btn-number">1</Button>
        </Col>

        <Col>
        <Button onClick={() => addNumber('2')} variant="dark" className="btn-number">2</Button>
        </Col>

        <Col>
        <Button onClick={() => addNumber('3')} variant="dark" className="btn-number">3</Button>
        </Col>

        <Col>
        <Button onClick={() => chosenOpt('-')} variant="dark" className="btn-number">-</Button>
        </Col>
      </Row>

      <Row>
        <Col>
        <Button onClick={() => addNumber('0')} variant="dark" className="btn-zero">0</Button>
        </Col>

        <Col>
        <Button onClick={() => chosenOpt('+')} variant="dark" className="btn-zero">+</Button>
        </Col>
      </Row>
      <Row>
      <Col>
        <Button variant="info" className="btn-equal">=</Button>
        </Col>
        <Col>
        <Button variant="dark" className="btn-dot">.</Button>
        </Col>
      </Row>
      
    </Container>
    
    </Jumbotron>
  
  );


}

export default Calc;
