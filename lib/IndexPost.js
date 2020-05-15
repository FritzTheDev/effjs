import Link from "next/link";

export const IndexPost = ({ imgSrc, postHref, title, subtitle, date }) => (
  <Link href={postHref}>
    <span className="w-full my-4 md:w-1/2 lg:w-1/3">
      <article className="flex md:flex-col min-h-full cursor-pointer bg-gray-400 hover:bg-orange-500 mx-4 p-6 justify-end">
        <img
          className="rounded-lg w-32 md:w-auto h-32 h-auto mx-auto"
          src={imgSrc}
        />
        <div className="block my-auto mx-5 md:mx-auto flex flex-col h-full">
          <header className="text-xl md:pt-5 text-center">{title}</header>
          <p className="text-center py-1">{subtitle}</p>
        </div>
        <div className="hidden md:flex justify-between flex-row text-gray-600">
            <span className="text-left">Fritz Johnson</span>
            <span className="text-right text-gray-600">{date}</span>
          </div>
      </article>
    </span>
  </Link>
);
