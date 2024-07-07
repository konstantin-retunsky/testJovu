import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  rating?: number | null;
  comment?: string | null;
  timestamp?: Date | null;
  ad?: AdWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
