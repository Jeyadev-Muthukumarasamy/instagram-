  import React from "react";
  import "./Sidebar.css";
import Story from "../Story/Story";


  const Sidebar = () => {
    return (
      <div id="container">
       
       <div id="bottomNavbar">
        {/* Add your icon links here */}
        <a href="#">
          <img src="public/home.png" id="bottomNavbarIcon" alt="" />
        </a>
        <a href="#">
          <img src="public/search.png" id="bottomNavbarIcon" alt="" />
        </a>
        <a href="#">
          <img src="public/explore.png" id="bottomNavbarIcon" alt="" />
        </a>
        <a href="#">
          <img src="public/video.png" id="bottomNavbarIcon" alt="" />
        </a>
        <a href="#">
          <img src="public/chat.png" id="bottomNavbarIcon" alt="" />
        </a>
      </div>
        <link
          href="https://fonts.googleapis.com/css2?family=inter:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <img src="public/instagram.png" alt="" id="logo" />
          <div id="sidebarcontainer">
            <img src="public/home.png" id="sidebar1icon" alt="" />

            <p id="sidebar1">Home</p>
            
          </div> 
        <div id="sidebarcontainer2">
          
          <img src="public/search.png" id="sidebar1icon" alt="" />

          <p id="sidebar1">Search</p>
          
        </div> 
        <div id="sidebarcontainer3">
          
          <img src="public/explore.png" id="sidebar1icon" alt="" />

          <p id="sidebar1">explore</p>
          
        </div> 
        <div id="sidebarcontainer4">
          
          <img src="public/video.png" id="sidebar1icon" alt="" />

          <p id="sidebar1">Reels</p>
          
        </div> 
        <div id="sidebarcontainer5">
          
          <img src="public/chat.png" id="sidebar1icon" alt="" />

          <p id="sidebar1">Messages</p>
          
        </div> 
        <div id="sidebarcontainer6">
          
          <img src="public/heart.png" id="sidebar1icon" alt="" />

          <p id="sidebar1">Notification</p>
          
        </div> 
        <div id="sidebarcontainer7">
          
          <img src="public/tab.png" id="sidebar1icon" alt="" />

          <p id="sidebar1">Create</p>
          
        </div> 
        <div id="sidebarcontainer8">
          
          <img src="public/tab.png" id="sidebar1icon" alt="" />

          <p id="sidebar1">Profile</p>
          
        </div> 
        <div id="sidebarcontainer9">
          
          <img src="public/menu.png" id="sidebar1icon" alt="" />

          <p id="sidebar1">More</p>
          
        </div> 

        <div className="vertical-line"></div>
        
        {/* <p id="sidebar1"><span id="sidebar1icon"><img src="public/home.png" alt="" /></span> </p> */}
      </div>
    );
  };

  export default Sidebar;
