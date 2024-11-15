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
    <section className="w-full h-[75.5vh] mt-6">
      <div className="grid-img-rightSide w-[90%] h-full text-yellow-50 ml-auto pb-7">
        <h3 className="grid-title py-5 font-barlowCondensed  text-3xl">
          <b className="mr-6 text-gray-500">03</b>SPACE LAUNCH 101
        </h3>
        <article className="grid-article mt-11 flex gap-10">
          <TechnologiesPagination technologyData={technologyData.technology} />
          <div className="flex flex-col">
            <h2 className="font-bellefair uppercase text-4xl opacity-[0.5]">
              THE TERMINOLOGY...
            </h2>
            <h1 className="text-white py-5 uppercase text-6xl leading-[64px] text-wra font-bellefair">
              {currentTechnologyName}
            </h1>
            <p className="w-[445px] h-fit font-barlow leading-[180%] text-home-desc">
              {currentTechnology.description}
            </p>
          </div>
        </article>
        <div className="grid-image content-center ml-5 place-items-center">
          <Image
            className="w-full h-full rounded-s-xl"
            src={currentTechnology.images.portrait}
            alt={currentTechnology.name}
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}
