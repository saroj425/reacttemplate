import React from 'react';
import {NavLink} from 'react-router-dom'
import Common from "./Common"
import web from "../src/images/toppng.com-svg-free-library-dolphin-tribe-tattoo-decal-animal-black-and-white-dolphin-clip-art-2337x1551.png"

const Home=()=> {
  return (
      <>
        <Common name="Grow your business with" imgsrc={web} visit="/service" btnname="Get Startted"/>
      </>
  );
}

export default Home;
