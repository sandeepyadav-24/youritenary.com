import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="h-screen">
      <Navbar />

      <div className="flex justify-center my-60 ">
        Your Trip Planner
        <button className="bg-black text-white px-2 rounded-sm flex justify-center">
          <Link href={"/create-trip"}>Get Started</Link>
        </button>
      </div>
    </main>
  );
}
