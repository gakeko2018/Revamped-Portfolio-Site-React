import React from 'react';
import '../css/SideDrawer.css';

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
      drawerClasses = 'side-drawer open';
    }
    return (
      <nav className={drawerClasses}>
        <ul>
          <li><a href='/'>Title</a></li>
          <li><a href='/'>Skills</a></li>
          <li><a href='/'>Projects</a></li>
          <li><a href='/'>Certifications</a></li>
          <li><a href='/'>About Me</a></li>
        </ul>
      </nav>
    );
}

export default SideDrawer;