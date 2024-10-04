import React from "react";
import Common from "./Common";
import web from "../src/Pictures/img7.png";

function Home() {
  return (
    <>
      <Common
        name="Crea tu nuevo negocio digital con "
        imgsrc={web}
        visit="/service"
        btname="Comencemos!"
      />
    </>
  );
}

export default Home;
