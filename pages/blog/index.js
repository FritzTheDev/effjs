import { Header } from "../../lib/Header";

export default () => (
  <>
    <Header />
    <main className="container mx-auto">
      <h1 className="text-center mt-4 text-4xl font-display">Blog Archives</h1>
      <section className="flex flex-wrap">
        <article className="bg-gray-300 mx-5">
          <header className="text-xl">Build a Next.js Blog #1 - Next + MDX</header>
        </article>
        <article className="bg-gray-300 mx-5">
          <header className="text-xl">Build a Next.js Blog #1 - Next + MDX</header>
        </article>
      </section>
    </main>
  </>
);
