import '../styles/index.css'
import { MDXProvider } from "@mdx-js/react";

const components = {
  pre: props => <div {...props} />,
  code: props => <pre style={{color: 'tomato'}} {...props} />
}


export default function MyApp({ Component, pageProps }) {
  return <MdxProvider components={components}><Component {...pageProps} /></MdxProvider>
}