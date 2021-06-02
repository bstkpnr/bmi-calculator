import React from "react";
import { Card } from "react-bootstrap";

function Info() {
  return (
    <Card style={{ width: '18rem' }} className="row-2">
    <Card.Body>
      <Card.Title>BMI Nedir?</Card.Title>
      <Card.Text>
      Vücut kitle indeksi hesaplama, boyumuza göre kilomuzun zayıf mı, şişman
        mı olduğunu belirlemek için kullanılır
      </Card.Text>
    </Card.Body>
  </Card>
    
  );
}
export default Info;
