import { Header } from "../../lib/Header";
import { IndexPost } from "../../lib/IndexPost";

export default () => (
  <>
    <Header />
    <main className="container mx-auto">
      <h1 className="text-center mt-4 text-4xl font-display">The EffJS Blog</h1>
      <section id="posts" className="flex flex-wrap">
        <IndexPost
          postHref="/blog/next-with-tailwind"
          imgSrc="/next-with-tailwind-1.png"
          title="Configuring Next.js with Tailwind CSS"
          subtitle="Get Started With Utility Classes in Next.js"
          date="May 12, 2020"
        />
      </section>
    </main>
  </>
);
