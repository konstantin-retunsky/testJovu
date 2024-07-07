import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  rating?: SortOrder;
  comment?: SortOrder;
  timestamp?: SortOrder;
  adId?: SortOrder;
  userId?: SortOrder;
};
