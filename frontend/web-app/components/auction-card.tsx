import { Auction } from "@/models/auction";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type AuctionCardProps = {
  auctionData: Auction;
};

const AuctionCard = (props: AuctionCardProps) => {
  const { auctionData } = props;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <Image
          alt={auctionData.make ?? "auction image"}
          src={auctionData.imageUrl ?? ""}
        />
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default AuctionCard;
