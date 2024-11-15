import Link from "next/link";

export default function Home() {
  return (
    <section className="flex justify-between items-center p-28">
      <article className="flex flex-col justify-between items-start h-80 w-540">
        <h3 className="text-home-desc text-3xl font-barlowCondensed">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="text-white text-9xl font-bellefair">SPACE</h1>
        <p className="text-home-desc leading-extended font-barlow">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>
      <Link
        href={"/destination/moon"}
        className="hover-explore-button flex justify-center items-center text-black font-bellefair w-64 h-64 bg-white rounded-full text-3xl"
      >
        EXPLORE
      </Link>
    </section>
  );
}
