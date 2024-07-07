import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";
import { Message } from "../message/Message";
import { Profile } from "../profile/Profile";
import { Ad } from "../ad/Ad";
import { Review } from "../review/Review";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  role: string | null;
  transactions?: Array<Transaction>;
  messages?: Array<Message>;
  profiles?: Array<Profile>;
  ads?: Array<Ad>;
  reviews?: Array<Review>;
};
