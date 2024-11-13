import CrewNavButtons from "@/components/CrewNavButtons";
import getData from "@/lib/getData";
import Image from "next/image";

export default async function Crew({
  params: { member },
}: {
  params: { member: string };
}) {
  const crewData = await getData("crewKey");

  const crewMember = crewData.crew.find(
    (crewMember) => crewMember.role.toLowerCase() === member
  );

  if (!crewMember) {
    return <div>Something went wrong</div>;
  }

  return (
    <section className="w-full h-[79.5vh]">
      <div className="grid-layout w-[80%] h-full text-yellow-50 my-0 mx-auto pb-7">
        <h3 className="grid-title ml-16 py-5 font-barlowCondensed  text-3xl">
          <b className="mr-6">01</b>PICK YOUR DESTINATION
        </h3>
        <div className="grid-image content-center place-items-center">
          <Image
            src={crewMember.images.webp}
            alt={crewMember.name}
            width={400}
            height={400}
            priority
          />
        </div>
        <article className="grid-article">
          <h2>Commander</h2>
          <h1 className="text-white py-10 uppercase text-8xl leading-[110px] font-bellefair"></h1>
          <p className="w-[445px] h-fit font-barlow leading-[180%] text-home-desc"></p>
          <CrewNavButtons crewData={crewData.crew} />
        </article>
      </div>
    </section>
  );
}
