import React from "react";
import * as HeroIcon from "react-icons/hi2";

const Icon = ({ name, className = "", ...props }) => {
    const IconComponent = HeroIcon[name]
    return (
        <IconComponent className={`icon ${className}`} {...props} />
    )
};

export default Icon
