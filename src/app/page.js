"use client";
import BuildList from "@/components/BuildList";
import { useEffect, useState } from "react";

export default function Home() {
  const [builds, setBuilds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/builds")
      .then((res) => res.json())
      .then((data) => setBuilds(data))
      .catch((err) => console.error("Failed to fetch builds:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Custom PC Builds</h1>
      <BuildList builds={builds} />
    </div>
  );
}
