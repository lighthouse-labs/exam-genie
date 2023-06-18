import React from "react";
import Particle from "./Particle";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.scss";
import Exam from "../components/ExamGenerated";

const  Home = ({setFinalScore}) => {
  return (
    <section id="background">
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Exam setFinalScore={setFinalScore} />
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Home;
