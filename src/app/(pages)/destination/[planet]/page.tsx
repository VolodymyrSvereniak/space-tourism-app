import getData from "@/lib/getData";
import Image from "next/image";
import PlanetLinks from "@/components/PlanetLinks";

export default async function Destination({
  params: { planet },
}: {
  params: { planet: string };
}) {
  const planetData = await getData("destinationKey");

  const getPlanet = planetData.destination.find(
    (d) => d.name.toLowerCase() === planet
  );

  if (!getPlanet) {
    return <div>Planet not found</div>;
  }

  return (
    <section className="w-full h-[79.5vh]">
      <div className="grid-layout w-[80%] h-full text-yellow-50 my-0 mx-auto pb-7">
        <h3 className="grid-title ml-16 py-5 font-barlowCondensed  text-3xl">
          <b className="mr-6">01</b>PICK YOUR DESTINATION
        </h3>
        <div className="grid-planet content-center place-items-center">
          <Image
            src={getPlanet.images.png}
            alt={getPlanet.name}
            width={400}
            height={400}
            priority
          />
        </div>
        <article className="grid-article">
          <PlanetLinks planetData={planetData} />
          <h1 className="text-white py-10 uppercase text-8xl leading-[110px] font-bellefair">
            {getPlanet.name}
          </h1>
          <p className="w-[445px] h-fit font-barlow leading-[180%] text-home-desc">
            {getPlanet.description}
          </p>
          <hr className="border-[1px] border-gray-700 my-5" />
          <div className="flex">
            <div className="w-[210px]">
              <h4 className="text-home-desc tracking-[2px] font-barlowCondensed text-sm h-10">
                AVG. DISTANCE
              </h4>
              <p className="text-white font-bellefair text-3xl uppercase">
                {getPlanet.distance}
              </p>
            </div>
            <div className="w-[210px]">
              <h4 className="text-home-desc tracking-[2px] font-barlowCondensed text-sm h-10">
                EST. TRAVEL TIME
              </h4>
              <p className="text-white font-bellefair text-3xl uppercase">
                {getPlanet.travel}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
