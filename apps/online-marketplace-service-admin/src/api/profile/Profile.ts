import { User } from "../user/User";

export type Profile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  avatarUrl: string | null;
  contactDetails: string | null;
  user?: User | null;
};
