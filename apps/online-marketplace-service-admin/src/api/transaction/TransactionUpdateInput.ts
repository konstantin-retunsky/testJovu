import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  status?: string | null;
  paymentMethod?: string | null;
  user?: UserWhereUniqueInput | null;
  ad?: AdWhereUniqueInput | null;
};
