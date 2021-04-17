import { useRouter } from "next/router";
import { X, ArrowLeft } from "react-feather";

import { Button } from "./Button";

export function Navbar() {
  const router = useRouter();
  const lmao = () => {
    console.log("dalsdlajs");
  };
  return (
    <nav className="navbar flex w-full justify-between py-4">
      <Button onClick={() => router.back()}>
        <ArrowLeft />
      </Button>
      <Button onClick={() => router.push("/")}>
        <X />
      </Button>
    </nav>
  );
}
