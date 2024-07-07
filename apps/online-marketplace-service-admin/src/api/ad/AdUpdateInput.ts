import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { TransactionUpdateManyWithoutAdsInput } from "./TransactionUpdateManyWithoutAdsInput";
import { MessageUpdateManyWithoutAdsInput } from "./MessageUpdateManyWithoutAdsInput";
import { ReviewUpdateManyWithoutAdsInput } from "./ReviewUpdateManyWithoutAdsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdUpdateInput = {
  title?: string | null;
  description?: string | null;
  price?: number | null;
  status?: string | null;
  photos?: string | null;
  videos?: string | null;
  category?: CategoryWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutAdsInput;
  messages?: MessageUpdateManyWithoutAdsInput;
  reviews?: ReviewUpdateManyWithoutAdsInput;
  user?: UserWhereUniqueInput | null;
};
