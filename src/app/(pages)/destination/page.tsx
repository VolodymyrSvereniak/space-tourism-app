import { redirect } from "next/navigation";

export default function Destination() {
  redirect("/destination/moon");

  return null;
}
