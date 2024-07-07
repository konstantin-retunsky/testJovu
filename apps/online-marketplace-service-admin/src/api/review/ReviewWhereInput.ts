import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  rating?: IntNullableFilter;
  comment?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  ad?: AdWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
