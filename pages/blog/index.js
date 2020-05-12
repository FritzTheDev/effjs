import { Header } from "../../lib/Header";
import Link from "next/link";
import { IndexPost } from "../../lib/IndexPost";

export default () => (
  <>
    <Header />
    <main className="container mx-auto">
      <h1 className="text-center mt-4 text-4xl font-display">Blog Archives</h1>
      <section id="posts">
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
