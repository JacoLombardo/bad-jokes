import Avatar from "@/components/Avatar";
import Cards from "@/components/Cards";
import { useState } from "react";

export default function Home() {
  const [selectedWords, setSelectedWords] = useState<string[]>([
    "ciao",
    "io",
    "sono",
  ]);
  return (
    <>
      <h1>Bad Jokes Generator</h1>
      <Avatar selectedWords={selectedWords} />
      <Cards
        selectedWords={selectedWords}
        setSelectedWords={setSelectedWords}
      />
    </>
  );
}
