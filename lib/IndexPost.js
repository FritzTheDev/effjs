import Link from "next/link";

export const IndexPost = ({ imgSrc, postHref, title, subtitle }) => (
  <Link href={postHref}>
    <article className="flex md:block cursor-pointer bg-gray-400 hover:bg-orange-500 mx-5 md:w-1/2 lg:w-1/4 p-5">
      <img
        className="rounded-lg w-32 h-32 md:w-auto md:h-auto mx-auto"
        src={imgSrc}
      />
      <div className="block">
        <header className="text-xl md:pt-5 text-center">{title}</header>
        <p className="text-center">{subtitle}</p>
      </div>
    </article>
  </Link>
);
