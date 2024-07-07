import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  status?: StringNullableFilter;
  photos?: StringNullableFilter;
  videos?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  transactions?: TransactionListRelationFilter;
  messages?: MessageListRelationFilter;
  reviews?: ReviewListRelationFilter;
  user?: UserWhereUniqueInput;
};
