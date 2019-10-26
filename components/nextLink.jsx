import React from "react";
import Link from "next/link";

import A from "./elements/a";

const CustomLink = ({ slug = "", fullHref, children, className }) => {
    const href = `/${slug}`;

    return fullHref ? (
        <A href={fullHref} target="_blank" className={className}>
            {children}
        </A>
    ) : (
        <Link href={href}>
            <A className={className}>{children}</A>
        </Link>
    );
};

export default CustomLink;
