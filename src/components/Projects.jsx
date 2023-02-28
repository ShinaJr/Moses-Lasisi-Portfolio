import React from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import styled from "styled-components";
// Data
import { filteredProjects } from "../data";
// Icons
import { FaGithub } from "react-icons/fa";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";

const StyledSection = styled.section``;

export default function Projects() {
  const [mainProjects, setMainProjects] = React.useState([]);
  const { theme } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);

  React.useEffect(
    function () {
      const tempData = [];
      data.forEach((el, i) => (tempData[i] = Object.create(el)));
      if (data.length !== 0 && filteredProjects.length !== 0) {
        const tempArray = tempData.filter((obj) =>
          filteredProjects.includes(obj.name)
        );
        tempArray.length !== 0
          ? setMainProjects([...tempArray])
          : setMainProjects([...tempData.slice(0, 3)]);
      } else {
        setMainProjects([...tempData.slice(0, 3)]);
      }
    },
    [data]
  );

  return (
    <Element name={"Projects"} id="projects">
      <StyledSection className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Projects</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {isLoading && (
            <Container className="d-flex">
              <Loading />
            </Container>
          )}
          {error && <h2 className="text-center">{error}</h2>}
          {!error && data.length === 0 && (
            <h2 className="text-center">
              Oops, you do not have any GitHub projects yet...
            </h2>
          )}
          {mainProjects.length !== 0 && (
            <>
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                {mainProjects.map(function ({
                  id,
                  image,
                  image1,
                  image2,
                  image3,
                  image4,
                  image5,
                  image6,
                  image7,
                  video,
                  name,
                  description,
                  html_url,
                }) {
                  return (
                    <Col key={id}>
                      <StyledCard
                        theme={theme}
                        image={image}
                        name={name}
                        description={description}
                        url={html_url}
                        video={video}
                        image1={image1}
                        image2={image2}
                        image3={image3}
                        image4={image4}
                        image5={image5}
                        image6={image6}
                        image7={image7}
                      />
                    </Col>
                  );
                })}
              </Row>
              {/* I changed the data.length > 3 to data.length < 3 in order to stop displaying all the github project button */}
              {data.length < 3 && (
                <Container className="text-center mt-5">
                  <Link to="/All-Projects">
                    <Button
                      size="lg"
                      variant={
                        theme === "light" ? "outline-dark" : "outline-light"
                      }
                    >
                      All <FaGithub /> Projects
                    </Button>
                  </Link>
                </Container>
              )}
            </>
          )}
        </Container>
      </StyledSection>
    </Element>
  );
}
