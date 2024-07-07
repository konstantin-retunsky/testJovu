import { Category } from "../category/Category";
import { Transaction } from "../transaction/Transaction";
import { Message } from "../message/Message";
import { Review } from "../review/Review";
import { User } from "../user/User";

export type Ad = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  price: number | null;
  status: string | null;
  photos: string | null;
  videos: string | null;
  category?: Category | null;
  transactions?: Array<Transaction>;
  messages?: Array<Message>;
  reviews?: Array<Review>;
  user?: User | null;
};
