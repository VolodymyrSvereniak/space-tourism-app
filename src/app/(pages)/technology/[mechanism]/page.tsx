import getData from "@/lib/getData";
import Image from "next/image";
import TechnologiesPagination from "@/components/TechnologiesPagination";

export default async function Technology({
  params: { mechanism },
}: {
  params: { mechanism: string };
}) {
  const technologyData = await getData("technologyKey");

  const currentTechnology = technologyData.technology.find(
    (currentMechanism) => currentMechanism.name.toLowerCase() === mechanism
  );

  if (!currentTechnology) {
    return <div>Something went wrong</div>;
  }

  const currentTechnologyName = currentTechnology.name.replace(/-/g, " ");

  return (
    <section className="w-full h-[75.5vh] mt-6 max-lg:h-full">
      <div className="grid-img-rightSide w-[90%] h-full text-yellow-50 ml-auto pb-7 max-lg:flex max-lg:flex-col max-lg:w-full">
        <h3 className="grid-title py-5 font-barlowCondensed  text-3xl max-lg:text-2xl max-lg:pl-5 max-lg:pb-14 max-sm:text-center max-sm:pl-0">
          <b className="mr-6 text-gray-500">03</b>SPACE LAUNCH 101
        </h3>
        <article className="grid-article mt-11 flex gap-10 max-lg:order-2 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:gap-14">
          <TechnologiesPagination technologyData={technologyData.technology} />
          <div className="flex flex-col">
            <h2 className="font-bellefair uppercase text-4xl opacity-[0.5] max-lg:text-3xl max-sm:text-2xl">
              THE TERMINOLOGY...
            </h2>
            <h1 className="text-white py-5 uppercase text-6xl leading-[64px] text-wra font-bellefair max-lg:text-5xl max-sm:text-4xl">
              {currentTechnologyName}
            </h1>
            <p className="w-[445px] h-fit font-barlow leading-[180%] text-home-desc max-lg:w-[512px] max-lg:text-base max-sm:w-[327px]">
              {currentTechnology.description}
            </p>
          </div>
        </article>
        <div className="grid-image relative w-full h-full content-center place-items-center max-lg:h-[40vh]">
          <Image
            className="rounded-s-xl object-cover max-lg:rounded-none"
            src={currentTechnology.images.portrait}
            alt={currentTechnology.name}
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
}
