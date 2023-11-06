import { User } from "./User";

export interface CardModel {
  name: string;
  image: string;
  priceETH: number;
  user: User; // Replace with the type of User ID (string, number, etc.)
  category: string;
  tier: string;
  theme: string;
  colorFrom: string;
  colorTo: string;
  createdDate: Date;
  modifiedDate: Date;
}

export interface ResponseCard {
  status: number;
  message: string;
  total: number;
  results: CardModel[];
}
