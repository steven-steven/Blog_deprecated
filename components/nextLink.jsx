import React from "react";
import Link from "next/link";

import A from "./elements/a";

const CustomLink = ({ slug = "", children, className }) => {
    const href = `/${slug}`;

    return (
        <Link href={href}>
            <A className={className}>{children}</A>
        </Link>
    );
};

export default CustomLink;
