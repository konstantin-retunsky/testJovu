import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { TransactionCreateNestedManyWithoutAdsInput } from "./TransactionCreateNestedManyWithoutAdsInput";
import { MessageCreateNestedManyWithoutAdsInput } from "./MessageCreateNestedManyWithoutAdsInput";
import { ReviewCreateNestedManyWithoutAdsInput } from "./ReviewCreateNestedManyWithoutAdsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdCreateInput = {
  title?: string | null;
  description?: string | null;
  price?: number | null;
  status?: string | null;
  photos?: string | null;
  videos?: string | null;
  category?: CategoryWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutAdsInput;
  messages?: MessageCreateNestedManyWithoutAdsInput;
  reviews?: ReviewCreateNestedManyWithoutAdsInput;
  user?: UserWhereUniqueInput | null;
};
