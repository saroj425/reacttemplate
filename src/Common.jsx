import React from 'react';
import {NavLink} from 'react-router-dom'
import web from "../src/images/toppng.com-svg-free-library-dolphin-tribe-tattoo-decal-animal-black-and-white-dolphin-clip-art-2337x1551.png"

const Common=(props)=> {
  return (
    <>
      <section id="header" className=" header-height d-flex align-items-center">
        <div className="conatainer-fluid">
          <div className="row">
              <div className="col-10 mx-auto">
                  <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                      <h2>{props.name}<strong className="brand-name">J.K Engineering</strong></h2>
                      <h4 className="my-3">
                        We are the team of talented Engineer
                      </h4>
                      <div className="mt-3">
  <NavLink to={props.visit} className="btn-get-started">{props.btnname}</NavLink>
                      </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-image animated">
                      <img src={web} className="img-fluid animated" alt="Image "/>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
