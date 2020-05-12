import { Header } from "../../lib/Header";
import Link from "next/link";

export default () => (
  <>
    <Header />
    <main className="container mx-auto">
      <h1 className="text-center mt-4 text-4xl font-display">Blog Archives</h1>
      <section id="posts">
        <Link href="/blog/next-blog-1">
          <article className="bg-gray-400 hover:bg-orange-400 mx-5 md:w-1/2 lg:w-1/4 p-5">
            <img
              className="rounded-lg w-auto h-auto mx-auto"
              src="/next-blog-1-screenshot.png"
            />
            <header className="text-xl text-center">
              How To Build A Next.js Blog #1
            </header>
            <p className="text-center">Setting Up Next & TailwindCSS</p>
          </article>
        </Link>
      </section>
    </main>
  </>
);
