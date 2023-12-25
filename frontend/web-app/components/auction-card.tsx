import { Auction } from "@/models/auction";
import { Card } from "flowbite-react";
import Link from "next/link";
import CardImage from "./card-image";
import CountDownTimer from "./count-down-timer";

type AuctionCardProps = {
  auctionData: Auction;
};

const AuctionCard = (props: AuctionCardProps) => {
  const { auctionData } = props;
  return (
    <Link href={`/${auctionData.id}`}>
      <Card
        className="max-w-sm"
        renderImage={() => (
          <div className="relative">
            <CardImage imageUrl={auctionData.imageUrl ?? ""} />
            <div className="absolute bottom-2 left-2">
              <CountDownTimer auctionEnd={auctionData.auctionEnd} />
            </div>
          </div>
        )}
      >
        <div className="flex items-center justify-between">
          <h2>{auctionData.make}</h2>
          <div className="text-sm font-semibold">{auctionData.year}</div>
        </div>
      </Card>
    </Link>
  );
};

export default AuctionCard;
