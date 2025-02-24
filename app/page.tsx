import { IndexGsap } from "@/components/gsap/index-gsap";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="mx-auto my-0 px-10 md::px-32">
        <h1 className="text-center font-bold text-4xl py-20">
          animations study in Javascript
        </h1>

        <IndexGsap />
      </div>
    </main>
  );
}
