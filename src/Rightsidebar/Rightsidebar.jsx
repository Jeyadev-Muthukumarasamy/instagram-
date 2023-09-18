import React from "react";
import "./Rightsidebar.css";
const Rightsidebar = () => {
  return (
    <div id="rightsidebar">
      <div id="sidebarright">
        <div id="rsbimage">
          <img src="public/profile.png" alt="" id="proimage" />
        </div>
        <div id="rsbprofiles">
          <div id="profileusername">Jeyadev M</div>
          <div id="profilename">Jeyadev Muthukumarasamy</div>
        </div>
        <div id="rsbswitch">
          <p id="switch">switch</p>
        </div>
        <div id="suggestionflex">
          <p id="profilesuggested">Suggested for you</p>
          <p id="profileseeall">See All</p>
        </div>
      </div>
      
      
    </div>
  );
};

export default Rightsidebar;
