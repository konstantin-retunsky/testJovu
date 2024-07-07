import { User } from "../user/User";
import { Ad } from "../ad/Ad";

export type Transaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  status: string | null;
  paymentMethod: string | null;
  user?: User | null;
  ad?: Ad | null;
};
