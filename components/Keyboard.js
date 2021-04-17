import React from "react";
import { getDigits, getLetters } from "../utils";
import { Delete } from "react-feather";

export function Keyboard({ setSearch }) {
  const [isAlpha, setIsAlpha] = React.useState(true);

  return (
    <div className="h-auto flex flex-row space-x-3 w-108">
      <div className="flex space-y-3 flex-col flex-grow ">
        <div className="flex-1 grid grid-cols-7 gap-3">
          {isAlpha
            ? getLetters().map((letter, i) => (
                <button
                  className="bg-dark-purple p-2 lg:text-lg"
                  key={i}
                  onClick={() => setSearch((old) => old + letter.toLowerCase())}
                >
                  {letter}
                </button>
              ))
            : getDigits().map((digit, i) => (
                <button
                  className="bg-dark-purple p-2 lg:text-lg"
                  key={i}
                  onClick={() => setSearch((old) => old + digit)}
                >
                  {digit}
                </button>
              ))}
        </div>
        <div className="h-16 flex space-x-2">
          <button
            className="flex-1 p-1 bg-blue lg:text-lg"
            onClick={() => setSearch((old) => old + " ")}
          >
            SPACE
          </button>
          <button
            className="flex-1 p-1 bg-blue lg:text-lg"
            onClick={() => setSearch((old) => "")}
          >
            CLEAR
          </button>
          <button
            className="flex-1 p-1 bg-yellow lg:text-lg"
            form="search_form"
          >
            SEARCH
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-3 w-auto">
        <button
          className="bg-dark-purple p-2 px-6 lg:text-lg flex justify-center items-center text-gold"
          onClick={() => setSearch((old) => old.slice(0, -1))}
        >
          <Delete />
        </button>
        <button
          className="bg-dark-purple p-2 px-6 lg:text-lg flex justify-center items-center text-gold"
          onClick={() => setIsAlpha(!isAlpha)}
        >
          {isAlpha ? "123" : "ABC"}
        </button>
      </div>
    </div>
  );
}
