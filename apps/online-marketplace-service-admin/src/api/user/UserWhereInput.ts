import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";
import { AdListRelationFilter } from "../ad/AdListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  role?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  messages?: MessageListRelationFilter;
  profiles?: ProfileListRelationFilter;
  ads?: AdListRelationFilter;
  reviews?: ReviewListRelationFilter;
};
