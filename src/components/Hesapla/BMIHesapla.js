import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Ideal, YuksekKilo, Zayıf } from "../Card/Card";
function Hesapla() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  function calc() {
    let calculator = (height / 100) * (height / 100);
    calculator = weight / calculator;
    calculator = calculator.toFixed(0);
    setBmi(calculator);
  }

  return (
      <>
    <Container className="col-2 ">
      <Form className="form-group  ">
        <Form.Group className=" mb-3 " controlId="formBasicEmail">
          <Form.Label className="h5 text-center mb-4">
            Boyunuzu Giriniz
          </Form.Label>
          <Form.Control
            className="form-control md-2"
            value={height}
            onChange={handleHeight}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="h5 text-center mb-4">
            Kilonuzu Giriniz{" "}
          </Form.Label>
          <Form.Control value={weight} onChange={handleWeight} />
        </Form.Group>
        <Button onClick={calc} variant="danger">
          Gönder
        </Button>
            </Form>
            </Container>
            
        <div>
          <h2>
            {" "}
            {bmi > 25 ? (
              <span>
                {bmi} <YuksekKilo />{" "}
              </span>
            ) : bmi < 18 ? (
              <span>
                {bmi} <Zayıf />
              </span>
            ) : (
              <span>
                {" "}
                {bmi} <Ideal />{" "}
              </span>
            )}
          </h2>
        </div>
      </>
  );
}

export default Hesapla;
