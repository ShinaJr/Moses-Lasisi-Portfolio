import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Blog } from "../data";
// Icons
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { blog, html_url } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a
        href={html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/moses-lasisi-7b9084163/"
        aria-label="Check out my LinkedIn profile."
        className="link-icons"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com/ShinaJr10"
        aria-label="Check out my Twitter profile."
        className="link-icons"
      >
        <FaTwitterSquare />
      </a>
      {blog && (
        <a href={blog} aria-label="External link" className="link-icons">
          {Blog}
        </a>
      )}
    </StyledSocialLinks>
  );
}
