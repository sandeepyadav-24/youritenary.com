import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="h-screen">
      <Navbar />

      <div className="flex justify-center items-center my-60 flex-col">
        <h1 className="text-2xl font-bold mb-4">Your Trip Planner</h1>
        <button className="bg-black text-white px-4 py-2 rounded-sm">
          <Link href="/create-trip">Get Started</Link>
        </button>
      </div>
    </main>
  );
}
