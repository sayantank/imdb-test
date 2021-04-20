import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { Navbar } from "../../components/Navbar";
import { MovieCard } from "../../components/MovieCard";

export default function SearchResult() {
  const router = useRouter();
  const { query } = router.query;
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=b0f94b19cd2d4b95f5ac277b5e2027c4&language=en-US&page=1&include_adult=false&query=${query}`
      );
      setData(data);
    };
    getData();
  }, [query]);

  return (
    <main className="flex w-full items-center justify-center flex-col space-y-6 px-6">
      <Navbar />
      <div className="w-full">
        <h1 className="text-lg lg:text-2xl">Search Results</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 w-full gap-5">
        {data.results?.map((movie, i) => (
          <MovieCard movie={movie} key={i} />
        ))}
      </div>
    </main>
  );
}

// export async function getServerSideProps(context) {
//   const { query } = context.query;
//   // Fetch data from external API
//   const { data } = await axios.get(
//     `https://api.themoviedb.org/3/search/movie?api_key=b0f94b19cd2d4b95f5ac277b5e2027c4&language=en-US&page=1&include_adult=false&query=${query}`
//   );

//   // Pass data to the page via props
//   return { props: { data } };
// }
