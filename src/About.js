import React from "react";
import Common from "./Common";
import web from "../src/Pictures/img3.png";

function About() {
  return (
    <>
      <Common
        name="Bienvenido a"
        imgsrc={web}
        visit="/contact"
        btname="Contactanos"
      />
    </>
  );
}

export default About;
