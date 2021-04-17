import { useRouter } from "next/router";
import { PlayCircle } from "react-feather";

export function RecentSearch({ searches }) {
  const router = useRouter();
  return (
    <div>
      <h2 className="text-xl lg:text-2xl text-gold mb-6">Recent Searches</h2>
      <ul className="flex flex-col space-y-4">
        {searches.map((item, i) => (
          <li
            key={i}
            className="p-4 rounded-full flex items-center space-x-4 bg-light-purple cursor-pointer"
            onClick={() => router.push(`/search/${item}`)}
          >
            <PlayCircle />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
