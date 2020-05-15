import "../styles/index.css";
import { MDXProvider } from "@mdx-js/react";
import { Header } from "../lib/Header";
import { CodeBlock } from "../lib/CodeBlock";

const components = {
  wrapper: (props) => (
    <>
      <Header />
      <div className="container mx-auto">
        <main {...props} />
      </div>
    </>
  ),
  p: (props) => <p className="py-1 text-lg mx-3" {...props} />,
  h1: (props) => <h1 className="text-4xl mx-3 text-center" {...props} />,
  h2: (props) => <h2 className="text-3xl mx-3 text-center" {...props} />,
  code: (props) => <CodeBlock {...props} />,
  pre: (props) => <div {...props} />,
};

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
