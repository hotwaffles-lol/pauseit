import { useState } from "react";
import type { V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Pause It" }];
};

export default function Index() {
  const [search, setSearch] = useState("");

  return (
    <div className="mx-auto bg-zinc-100">
      <h1 className="py-3 bg-pink-900 text-2xl uppercase font-bold text-center text-white">
        Pause It
      </h1>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          e.preventDefault();
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}
