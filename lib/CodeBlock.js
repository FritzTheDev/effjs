import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

export const CodeBlock = ({ children, className }) => {
  let language;
  try {
    language = className.replace(/language-/, '');
  } catch {
    language = 'javascript';
  }
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className={className} style={{ ...style, paddingLeft: "20px", paddingRight: "20px", marginTop: 10, marginBottom: 10, wordWrap: "normal" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </div>
      )}
    </Highlight>
  );
};
