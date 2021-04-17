export function MovieCard({ movie }) {
  return (
    <div className="">
      {/* <div
        className="w-full rounded-md"
        style={{ height: "13rem", overflow: "hidden" }}
      > */}
      <img
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        alt={movie.original_title}
        style={{ width: "100%", height: "auto" }}
      />
      {/* </div> */}
      <h2 className="mt-2">{movie.original_title}</h2>
    </div>
  );
}
