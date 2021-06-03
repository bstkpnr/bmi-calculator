import React from "react";
import { Card } from "react-bootstrap";
import "./Info.css"

function Info() {
  return (
    <Card className=" hoverCard  bg-dark text-light "  >
    <Card.Body>
      <Card.Title style={{color:"red"}}>BMI Nedir?</Card.Title>
      <Card.Text>
      Vücut kitle indeksi hesaplama, boyumuza göre kilomuzun zayıf mı, şişman
        mı olduğunu belirlemek için kullanılır
      </Card.Text>
    </Card.Body>
  </Card>
    
  );
}
export default Info;
