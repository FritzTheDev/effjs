export const Header = () => (
  <header>
    <nav className="flex items-center justify-between flex-wrap p-4 shadow bg-blue-600">
      <div className="text-white mr-6">
        <h1 className="text-white text-2xl font-display leading-normal">
          Effective Javascript
        </h1>
        <h4 className="text-white text-sm font-display leading-normal">
          Javascript To Get The Job Done.
        </h4>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-blue-300 hover:text-white hover:border-white">
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </nav>
  </header>
);
