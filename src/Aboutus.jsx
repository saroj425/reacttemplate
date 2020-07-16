import React from 'react';
import {NavLink} from 'react-router-dom'
import web from "../src/images/toppng.com-svg-free-library-dolphin-tribe-tattoo-decal-animal-black-and-white-dolphin-clip-art-2337x1551.png"
import Common from './Common';

const Aboutus=()=> {
  return (
    <>
      <Common name="Welcome to about page" imgsrc={web} visit="/contact" btnname="Contact Now"/>
    </>
  );
}

export default Aboutus;
