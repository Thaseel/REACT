import React from "react";

import './MainHeader.css';

const MainHeader = props => {
    return <header className="main-header">
        {props.children} {/* props.children is a special placeholder for your content wrapped between open and closing tag of your component ex: in MainNavigation.js file everything between <MainHeader></MainHeader> is your props.children in this case */}
    </header>
}

export default MainHeader;