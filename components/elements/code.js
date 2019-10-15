import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwl from "prism-react-renderer/themes/nightOwl";

export default ({ children }) => {
    const className = children.props.className || "";
    const matches = className.match(/language-(?<lang>.*)/);
    return (
        <Highlight
            {...defaultProps}
            code={children.props.children.trim()}
            language={
                matches && matches.groups && matches.groups.lang
                    ? matches.groups.lang
                    : ""
            }
            theme={nightOwl}
        >
            {({ className1, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    className={className1}
                    style={{ ...style, padding: "20px", fontSize: "0.7em" }}
                >
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span
                                    key={key}
                                    {...getTokenProps({ token, key })}
                                />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
};
