import React from 'react';
import "./Grid.css";
import Sidebar from '../Sidebar/Sidebar';
import Story from '../Story/Story';
import Rightsidebar from '../Rightsidebar/rightsidebar';
import Posts from '../Posts/Posts';


const Grid = () => {
  return (
    <div id="gridscontainer">
       
      <div id="fixed-sidebar">
        <Sidebar id="sidebars"/>
      </div>
      <div id="scrolling-content">
        {/* Content that you want to be scrollable */}
        <Story id="story"/>,
        <Rightsidebar />,
        <Posts />
       
      </div>
    </div>

    
    
  )
}

export default Grid;
