"use client";

import AuctionCard from "@/components/auction-card";
import { useSearch } from "@/hooks/useSearch";

export default function Home() {
  const { data } = useSearch({ params: "" });

  return (
    <main>
      <h1>Cartiers</h1>
      <div className="grid grid-cols-4 gap-4">
        {data?.results?.map((auction) => (
          <AuctionCard auctionData={auction} key={auction.id} />
        ))}
      </div>
    </main>
  );
}
