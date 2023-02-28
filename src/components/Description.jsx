import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import { FaChevronCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";
import { Element } from "react-scroll";
import styled from "styled-components";

const StyledSection = styled.section``;
const Description = ({
  theme,
  image,
  name,
  description,
  url,
  video,
  image1,
}) => {
  return (
    <Element name={"Description"} id="description">
      <StyledSection className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>{name}</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center text-center">
            <Col>
              <p>{description}</p>
              <Link to={"Features"} className="link-icons">
                <FaChevronCircleDown />
              </Link>
            </Col>
            <Col>
              {name === "SuperFoods" ? (
                <img src={image} width="300" height="500" alt="AppImage" />
              ) : (
                <video
                  src={video}
                  width="300"
                  height="500"
                  loop
                  autoPlay
                  muted
                ></video>
              )}
            </Col>
          </Row>
          <Row className="align-items-end down-container">
            <Col className="m-4 text-center">
              <Link to={"Features"} className="link-icons">
                <FaChevronCircleDown />
              </Link>
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </Element>
  );
};

export default Description;
