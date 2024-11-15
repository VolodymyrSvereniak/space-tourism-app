import getData from "@/lib/getData";
import Image from "next/image";

export default async function Technology({
  params: { mechanism },
}: {
  params: { mechanism: string };
}) {
  const technologyData = await getData("technologyKey");

  const currentTechnology = technologyData.technology.find(
    (currentTechnology) => currentTechnology.name.toLowerCase() === mechanism
  );
  console.log(mechanism);

  if (!currentTechnology) {
    return <div>Something went wrong</div>;
  }


  return (
    <section className="w-full h-[75.5vh]">
    
    </section>
  );
}
