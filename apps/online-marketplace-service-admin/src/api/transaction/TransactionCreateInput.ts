import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  status?: string | null;
  paymentMethod?: string | null;
  user?: UserWhereUniqueInput | null;
  ad?: AdWhereUniqueInput | null;
};
