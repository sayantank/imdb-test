export function MovieCard({ movie }) {
  return (
    <div className="flex flex-col">
      {/* <div
        className="w-full rounded-md"
        style={{ height: "13rem", overflow: "hidden" }}
      > */}
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
          alt={movie.original_title}
          style={{ width: "100%", height: "auto" }}
        />
      ) : (
        <div className="h-16 lg:h-auto lg:flex-grow lg:-mb-4 flex justify-center items-center text-gray-400">
          No image found.
        </div>
      )}
      {/* </div> */}
      <h2 className="mt-2">{movie.original_title}</h2>
    </div>
  );
}
