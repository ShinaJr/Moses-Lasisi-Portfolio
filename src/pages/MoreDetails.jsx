import React from "react";
import { useLocation } from "react-router-dom";
import Contact from "../components/Contact";
import Description from "../components/Description";
import Features from "../components/Features";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar1";
import { BackToTop } from "../components/globalStyledComponents";

export default function MoreDetails({
  theme,
  image,
  name,
  description,
  video,
  image1,
}) {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <main>
        <Description
          name={location.state.name}
          description={location.state.description}
          video={location.state.video}
          image={location.state.image}
        />
        <Features
          name={location.state.name}
          image1={location.state.image1}
          image2={location.state.image2}
          image3={location.state.image3}
          image4={location.state.image4}
          image5={location.state.image5}
          image6={location.state.image6}
        />
        <Contact />
      </main>
      <BackToTop home={"Description"} />
      <Footer />
    </>
  );
}
