import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
  ad?: AdWhereUniqueInput | null;
};
