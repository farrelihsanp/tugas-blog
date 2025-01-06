import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed-bottom mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-3 px-5 py-8 text-sm sm:flex-row position-fixed">
      <div className="flex text-1xl font-raleway font-semibold text-white bg-black p-2 transition duration-300">
        <Link href="/">Architecture Blog</Link>
      </div>

      <nav className="order-1 sm:order-2">
        <ul className="flex gap-3">
          <li>
            <Link
              className="text-primary-grey text-sm hover:bg-black hover:text-white p-2 transition duration-300"
              href="/blog"
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              className="text-primary-grey text-sm hover:bg-black hover:text-white p-2 transition duration-300"
              href="/categories"
            >
              CATEGORIES
            </Link>
          </li>
          <li>
            <Link
              className="text-primary-grey text-sm hover:bg-black hover:text-white p-2 transition duration-300"
              href="/about"
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
