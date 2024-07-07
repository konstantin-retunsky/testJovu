import { Ad } from "../ad/Ad";
import { User } from "../user/User";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number | null;
  comment: string | null;
  timestamp: Date | null;
  ad?: Ad | null;
  user?: User | null;
};
