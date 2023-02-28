import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import { Element } from "react-scroll";
import styled from "styled-components";

const StyledSection = styled.section``;

const Features = ({
  theme,
  image,
  name,
  description,
  url,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
}) => {
  return (
    <Element name={"Features"} id="features">
      <StyledSection className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>{name} Features</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <>
            {name === "deliveroo-clone" ? (
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                <Col>
                  <img src={image1} width="300" height="500" alt="" />
                </Col>
                <Col>
                  <img src={image2} width="300" height="500" alt="" />
                </Col>
                <Col>
                  <img src={image3} width="300" height="500" alt="" />
                </Col>
                <Col>
                  <img src={image4} width="300" height="500" alt="" />
                </Col>
                <Col>
                  <img src={image5} width="300" height="500" alt="" />
                </Col>
              </Row>
            ) : name === "Pelia" ? (
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                <Col>
                  <img src={image1} width="300" height="500" alt="" />
                </Col>
                <Col>
                  <img src={image2} width="300" height="500" alt="" />
                </Col>
                <Col>
                  <img src={image3} width="300" height="500" alt="" />
                </Col>
                <Col>
                  <img src={image4} width="300" height="500" alt="" />
                </Col>
                <Col>
                  <img src={image5} width="300" height="500" alt="" />
                </Col>
                <Col>
                  <img src={image6} width="300" height="500" alt="" />
                </Col>
              </Row>
            ) : name === "SuperFoods" ? (
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                <Col>
                  <img src={image1} width="300" height="500" alt="" />
                </Col>
                <Col>
                  <img src={image2} width="300" height="500" alt="" />
                </Col>
              </Row>
            ) : name === "NFT_APP" ? (
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                <Col>
                  <img src={image1} width="300" height="500" alt="" />
                </Col>
                <Col>
                  <img src={image2} width="300" height="500" alt="" />
                </Col>
              </Row>
            ) : null}
          </>
        </Container>
      </StyledSection>
    </Element>
  );
};

export default Features;
