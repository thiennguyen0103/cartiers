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
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </Link>
  );
};

export default AuctionCard;
