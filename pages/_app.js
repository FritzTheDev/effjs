import "../styles/index.css";
import { MDXProvider } from "@mdx-js/react";
import { Header } from "../lib/Header";
import { CodeBlock } from "../lib/CodeBlock";

const components = {
  wrapper: (props) => (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <main {...props} />
      </div>
    </>
  ),
  p: (props) => <p className="my-1" {...props} />,
  h1: (props) => <h1 className="text-4xl mx-3 my-4 text-center" {...props} />,
  h2: (props) => <h2 className="text-3xl mx-3 my-2 text-center" {...props} />,
  h3: (props) => <h2 className="text-2xl mx-3 my-2 text-center" {...props} />,
  h4: (props) => <h2 className="text-xl mx-3 text-center" {...props} />,
  h5: (props) => <h2 className="mx-3 text-center" {...props} />,
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
