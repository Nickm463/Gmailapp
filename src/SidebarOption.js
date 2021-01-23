import React from 'react';
import './fontStyle/SidebarOption.css';

function SidebarOption({Icon,title,number,selected}) {
    return (
        <div className={`sidebarOption ${selected && "siderbarOptionActive" }`}>
            <Icon/>
            <h3>{title}</h3>
             <p>{number}</p>
        </div>
    )
}

export default SidebarOption
