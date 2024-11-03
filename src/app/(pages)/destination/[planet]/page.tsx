import getData from "@/lib/getData";
import Link from "next/link";
import Image from "next/image";

export default async function Destination({
  params: { planet },
}: {
  params: { planet: string };
}) {
  const data = await getData("destinationKey");

  const getPlanet = data.destination.find(
    (d) => d.name.toLowerCase() === planet
  );

  return (
    <section className="text-yellow-50">
      {/* <div>
        <Link href={"/destination/moon"}>Moon</Link>
        <Link href={"/destination/mars"}>Mars</Link>
        {getPlanet?.distance}
      </div> */}
      <h3>
        <b>01</b>PICK YOUR DESTINATION
      </h3>
      <article>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h1></h1>
        <p></p>
        <div>
          <div>
            <h4></h4>
            <p></p>
          </div>
          <div>
            <h6>text</h6>
            <h4>text</h4>
          </div>
        </div>
      </article>
    </section>
  );
}
