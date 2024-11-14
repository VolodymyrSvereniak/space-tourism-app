import CrewMembersPagination from "@/components/CrewMembersPagination";
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
    <section className="w-full h-[75.5vh]">
      <div className="grid-crew gap-y w-[80%] h-full text-yellow-50 my-0 mx-auto pb-7">
        <h3 className="grid-title ml-16 py-5 font-barlowCondensed  text-3xl">
          <b className="mr-6 text-gray-500">02</b>MEET YOUR CREW
        </h3>
        <article className="grid-article flex flex-col justify-between">
          <div>
            <h2>Commander</h2>
            <h1 className="text-white py-5 uppercase text-6xl leading-[64px] text-wra font-bellefair">
              {crewMember.name}
            </h1>
            <p className="w-[445px] h-fit font-barlow leading-[180%] text-home-desc">
              {crewMember.bio}
            </p>
          </div>
          <CrewMembersPagination crewData={crewData.crew} />
        </article>
        <div className="grid-image content-center place-items-center">
          <Image
            className="crew-member-fade"
            src={crewMember.images.webp}
            alt={crewMember.name}
            layout="fixed"
            width={320}
            height={320}
            priority
          />
        </div>
      </div>
    </section>
  );
}
