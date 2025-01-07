import Link from "next/link";
import SearchBar from "./search-bar";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row max-w-[1100px] mx-auto items-center justify-between gap-3 px-5 py-8 text-sm">
      <div className="flex items-baseline gap-1">
        <div className="text-3xl font-raleway font-semibold text-white bg-black p-2 lg:text-4xl">
          <Link href="/">Architecture Blog</Link>
        </div>
      </div>

      <div className="flex-grow flex justify-center mt-4 sm:mt-0">
        <SearchBar />
      </div>

      <nav>
        <ul className="flex flex-col sm:flex-row gap-3 lg:gap-5">
          <li>
            <Link
              className="text-primary-grey text-sm lg:text-base p-2 transition-colors duration-200 hover:bg-black hover:text-white"
              href="/blog"
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              className="text-primary-grey text-sm lg:text-base p-2 transition-colors duration-200 hover:bg-black hover:text-white"
              href="/categories"
            >
              CATEGORIES
            </Link>
          </li>
          <li>
            <Link
              className="text-primary-grey text-sm lg:text-base p-2 transition-colors duration-200 hover:bg-black hover:text-white"
              href="/about"
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
