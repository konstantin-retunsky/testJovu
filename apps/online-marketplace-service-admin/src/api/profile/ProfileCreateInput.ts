import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  avatarUrl?: string | null;
  contactDetails?: string | null;
  user?: UserWhereUniqueInput | null;
};
