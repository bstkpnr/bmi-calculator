import React from "react";
import { Card, Container } from "react-bootstrap";

function YuksekKilo() {
  return (
    <Card className="text-center col-6">
      <Card.Img variant="top" src="yuksek.jpg" className="col-2 text-center" />
      <Card.Body>
        <Card.Title style={{ color: "red" }}>
          İdeal Kilonun Çok Üzerinde
        </Card.Title>
        <Card.Text>
          İdeal kilonu biraz uzakta bırakmışsın ama güzel bir haberimiz var; ona
          kavuşmak sandığın kadar zor değil. Her şey kararlı ve motive olmakla
          başlıyor, asla pes etme ve motivasyonunu yüksek tut, hareket ve
          dengeli beslenme hayatının bir parçası olduğunda değişimin hızına sen
          bile inanamayacaksın. Motivasyonu yüksek tutup, dengeli ve düzenli
          beslenmeye dikkat edip, hareketi artırarak umduğunuzdan bile kolay
          olacak
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Ideal() {
  return (
    <Container className=" col-12 align-items-center">
      <Card className="text-center col-6 justify-content-center">
        <Card.Img
          variant="top"
          src="saglıklı.jpg"
          className="col-2 text-center"
        />
        <Card.Body>
          <Card.Title style={{ color: "green" }}>Kilonuz İdeal</Card.Title>
          <Card.Text>
            Harikasın! Tam da ideal kilondasın! Şimdi sana düşen bunu korumak.
            Hareketi ihmal etmeden, düzenli ve dengeli beslenmeye
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
function Zayıf() {
  return (
    <Card className="text-center col-6 ">
      <Card.Img variant="top" src="zayıf.jpg" className="col-2 text-center" />
      <Card.Body>
        <Card.Title style={{ color: "orange" }}>
          İdeal Kilonun Altında
        </Card.Title>
        <Card.Text>
          İdeal kilonun altında kalmışsın ama yükselmen için yanındayız! Tek
          ihtiyacın biraz motivasyon biraz da düzenli ve dengeli beslenme.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export { Ideal, Zayıf, YuksekKilo };
