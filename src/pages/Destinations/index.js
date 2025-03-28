import { useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import SectionDestinations from "../../utils/Sections/destinations";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

function Destinations() {
  useEffect(() => {
    document.title = "Star Travel | Destinations";
    localStorage.removeItem("currentSection");
  }, []);

  return (
    <AboutContainer>
      <Header />

      <SectionDestinations height={"90vh"}/>

      <Footer/>
    </AboutContainer>
  );
}

export default Destinations;
