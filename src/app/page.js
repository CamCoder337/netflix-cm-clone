import Image from "next/image";
import HeaderComp from "./Components/Header";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <main className="flex min-w-screen min-h-screen flex-col items-center justify-between overflow-y-auto">
      <div className="overflow-visible h-0 relative z-10 font-sans top-0 w-full px-24">
        <HeaderComp/>
      </div>
      <Hero/>
      {/* <Hero/> */}

    </main>
  );
}
