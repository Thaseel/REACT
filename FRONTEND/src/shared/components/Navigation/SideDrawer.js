import React from "react";
import ReactDOM from 'react-dom';

import './SideDrawer.css';

const SideDrawer = props => {
    const content =  <aside className="side-drawer">{props.children}</aside>;

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook')); {/* ReactDOM.createPortal helps you to put the JSX elements where ever you wanna place inside the index.html file */}
};

export default SideDrawer;