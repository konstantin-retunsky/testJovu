import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";

export type TransactionWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  status?: StringNullableFilter;
  paymentMethod?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  ad?: AdWhereUniqueInput;
};
