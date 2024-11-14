import React from "react";
import Common from "./Common";
import Select from "./Select.js";
import ExpertForm from './ExpertForm';
import web from "../src/Pictures/img1.jpg";
import MainBanner from './MainBanner';
import SelectionSection from './SelectionSection';
function Home() {
  return (
    <>
    <MainBanner/>
      <Common
        name="Crea tu nuevo negocio digital con "
        imgsrc={web}
        visit="/service"
        btname="Comencemos!"
      />
      <SelectionSection/>
      <Select/>
      <ExpertForm/>
    </>
  );
}

export default Home;
