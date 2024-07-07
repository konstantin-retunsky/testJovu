import { User } from "../user/User";
import { Ad } from "../ad/Ad";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  timestamp: Date | null;
  user?: User | null;
  ad?: Ad | null;
};
