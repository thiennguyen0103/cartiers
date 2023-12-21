import { EAuctionStatus } from "@/constants/enums";

export type Auction = {
  reservePrice: number;
  seller: string;
  winner: string | null;
  soldAmount: number;
  currentHighBid: number;
  auctionEnd: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  status: EAuctionStatus;
  make: string | null;
  model: string | null;
  year: number;
  color: string | null;
  mileage: number;
  imageUrl: string | null;
  id: string;
};
