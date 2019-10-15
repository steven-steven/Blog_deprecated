import React from "react";

const Avatar = ({ slug, className }) => (
    <img
        alt="Steven's avatar"
        className={className}
        src={`/static/images/${slug}`}
    />
);

export default Avatar;
