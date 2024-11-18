import Link from "next/link";

export default function Home() {
  return (
    <section className="flex justify-between items-center sm:p-28 max-lg:flex-col max-lg:gap-32 max-sm:py-5">
      <article className="flex flex-col justify-between items-start h-80 w-540 max-lg:items-center max-lg:text-center max-lg:justify-center max-lg:gap-3 max-sm:gap-8">
        <h3 className="text-home-desc text-3xl font-barlowCondensed max-sm:text-2xl">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="text-white text-9xl font-bellefair max-sm:text-8xl">
          SPACE
        </h1>
        <p className="text-home-desc leading-extended font-barlow max-sm:text-sm max-sm:w-[327px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>
      <Link
        href={"/destination/moon"}
        className="hover-explore-button flex justify-center items-center text-black font-bellefair w-64 h-64 bg-white rounded-full text-3xl max-sm:w-36 max-sm:h-36 max-sm:text-lg"
      >
        EXPLORE
      </Link>
    </section>
  );
}
