import getData from "@/lib/getData";

export default async function Crew() {
  const data = await getData("crewKey");
  return <section className="text-yellow-200">{data.crew.map((d) => d.name)}</section>;
}
