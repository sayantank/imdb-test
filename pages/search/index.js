import React from "react";
import { useRouter } from "next/router";

import { Navbar } from "../../components/Navbar";
import { Search as SearchIcon } from "react-feather";
import { RecentSearch } from "../../components/RecentSearch";
import { Keyboard } from "../../components/Keyboard";

export default function Search() {
  const [search, setSearch] = React.useState("");
  const [searches, setSearches] = React.useState([]);

  const router = useRouter();

  React.useEffect(() => {
    if (localStorage.getItem("recent_searches")) {
      setSearches(JSON.parse(localStorage.getItem("recent_searches")));
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearches([...searches, search]);
    localStorage.setItem(
      "recent_searches",
      JSON.stringify([...searches, search])
    );
    router.push(`/search/${search}`);
  };

  return (
    <main className="flex w-full items-center justify-center flex-col space-y-6 px-6">
      <Navbar />
      <div className="bg-light-purple p-4 flex items-center space-x-4 w-full ">
        <SearchIcon />
        <form id="search_form" className="w-full" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-lg w-full lg:text-2xl bg-transparent focus:outline-none"
          />
        </form>
      </div>
      <div className="w-full flex justify-between">
        <RecentSearch searches={searches} />
        <Keyboard setSearch={setSearch} />
      </div>
    </main>
  );
}
