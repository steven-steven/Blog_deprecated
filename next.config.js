// next.config.js
const emoji = require("remark-emoji");

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [emoji]
    }
});

module.exports = withMDX({
    pageExtensions: ["js", "mdx"]
});
