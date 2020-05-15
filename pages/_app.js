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
  h1: (props) => <h1 className="text-4xl text-center" {...props} />,
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
