import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center flex-col space-y-4">
      <h1 className="text-xl lg:text-3xl font-bold">IMDB SEARCH APP</h1>
      <Link href="/search">
        <a className="text-lg lg:text-xl hover:underline">Search Movies</a>
      </Link>
      <div className="absolute mx-auto bottom-4">
        <a
          href="https://sayantank.vercel.app"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Sayantan Karmakar
        </a>
      </div>
    </main>
  );
}
