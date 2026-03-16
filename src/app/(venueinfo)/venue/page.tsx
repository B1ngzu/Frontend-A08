import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";

export default async function VenuePage() {
  const venues = getVenues();
  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <h1>Select your venue</h1>
      <p>Explore 3 fabulous venues in our venue catalog</p>
      <VenueCatalog venuesJson={venues} />
    </main>
  );
}
