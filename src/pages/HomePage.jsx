import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import avatar from "../static/Animoji.jpg";
import avatar2 from "../static/Avatar.svg";
import Section_color from "../components/Section_color";
import Section_white from "../components/Section_white";
import Cards from "../components/Cards";

const ProfileImg = styled.img`
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
`;

const ProfileContainer = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin: auto;
`;

const AboutContainer = styled.div`
  width: 55%;
  margin: 20px auto;
  display: block;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  a:hover {
    color: white;
    text-decoration: none;
  }
`;

function Aboutme() {
  return (
    <Section_white id="About">
      <ProfileContainer>
        <ProfileImg src={avatar2} />
      </ProfileContainer>
      <AboutContainer>
        <p>
          I am an extremely hard-working, friendly and creative person. I really
          enjoy working with peers ever since I was a junior high school
          student. I have been programming for more than 10 years and had
          received multiple awards base on both programming skills and teamwork.
          Right now, I mainly focusing on back-end development but exploring new
          technology and problem-solving will remain my love and interest in my
          life.
        </p>
        <LinkContainer>
          <a href="https://drive.google.com/file/d/1GxGRBnmOlOURGTFlJDUFVQVS98PObFGi/view?usp=sharing">
            <button type="button" class="btn btn-outline-primary">
              Resume
            </button>
          </a>
          <a href="mailto:yorklai0523@gmail.com">
            <button type="button" class="btn btn-outline-primary">
              Email me
            </button>
          </a>
        </LinkContainer>
      </AboutContainer>
    </Section_white>
  );
}

function Projects() {
  return (
    <Section_color id="Projects">
      <Cards />
    </Section_color>
  );
}

class HomePage extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Aboutme />
        <Projects />
      </React.Fragment>
    );
  }
}

export default HomePage;
