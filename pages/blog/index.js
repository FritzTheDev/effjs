import { Header } from "../../lib/Header";
import { IndexPost } from "../../lib/IndexPost";

export default () => (
  <>
    <Header />
    <main className="container mx-auto">
      <h1 className="text-center mt-4 text-4xl font-display">The EffJS Blog</h1>
      <section id="posts" className="flex flex-wrap">
        <IndexPost
          postHref="/blog/classy-express-1"
          imgSrc="/next-with-tailwind-1.png"
          title="Classy Express /w Typescript #1"
          subtitle="Middleware, Controllers, And Routers"
          date="July 8, 2020"
        />
      </section>
    </main>
  </>
);
