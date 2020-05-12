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
          title="Using Next.js with TailwindCSS"
          subtitle="Setting Up A Project From Scratch"
          date="May 12, 2020"
        />
        <IndexPost
          postHref="/blog/next-with-tailwind"
          imgSrc="/next-with-tailwind-1.png"
          title="Setting Up MDX and Next.js"
          subtitle="Learn To Use Markdown and JSX Together To Build A Blog"
        />
        <IndexPost
          postHref="/blog/next-with-tailwind"
          imgSrc="/next-with-tailwind-1.png"
          title="Using Next.js with TailwindCSS"
          subtitle="Setting Up A Project From Scratch"
        />
        <IndexPost
          postHref="/blog/next-with-tailwind"
          imgSrc="/next-with-tailwind-1.png"
          title="Using Next.js with TailwindCSS"
          subtitle="Setting Up A Project From Scratch"
        />
      </section>
    </main>
  </>
);
